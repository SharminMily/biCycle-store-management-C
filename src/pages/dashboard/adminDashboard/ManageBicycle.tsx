/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { TreeTable, TreeTablePageEvent } from "primereact/treetable";
import { Column } from "primereact/column";
import { TreeNode } from "primereact/treenode";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { toast } from "sonner";
import {
  useDeleteProductsMutation,
  useGetProductsQuery,
  useUpdateProductsMutation,
  
} from "../../../redux/features/admin/product/productApi";

const ManageBicycle = () => {
  const { data: products, isFetching, refetch } = useGetProductsQuery(undefined);
  const [updateProduct] = useUpdateProductsMutation();
 
  const [deleteProduct] = useDeleteProductsMutation();

  const [nodes, setNodes] = useState<TreeNode[]>([]);
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(15);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(isFetching);

  // Update modal state
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedBicycle, setSelectedBicycle] = useState<any>(null);
  console.log(selectedBicycle)

  useEffect(() => {
    if (products?.data) {
      const tableData: TreeNode[] = products.data.map(({ _id, name, brand, price, quantity, image }) => ({
        key: _id,
        data: { name, brand, price, quantity, image },
        leaf: true,
      }));

      setTotalRecords(products.data.length);
      setNodes(tableData.slice(first, first + rows));
      setLoading(false);
    }
  }, [products, first, rows]);

  const onPage = (event: TreeTablePageEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  // Open update modal
  const handleUpdateClick = (bicycle: any) => {
    setSelectedBicycle(bicycle);
    setUpdateModalOpen(true);
  };

  // Handle form update
  const handleUpdateSubmit = async () => {
    if (!selectedBicycle) return;

    const toastId = toast.loading("Updating...");

    try {
      await updateProduct({ id: selectedBicycle.key, data: { ...selectedBicycle.data } }).unwrap();
      toast.success("Bicycle updated successfully!", { id: toastId });
      refetch()
      setUpdateModalOpen(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to update bicycle", { id: toastId });
    }
  };

  // Handle delete action
  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Deleting...");
    try {
      await deleteProduct(id).unwrap();
      toast.success("Bicycle deleted successfully!", { id: toastId });
      refetch()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to delete bicycle", { id: toastId });
    }
  };

  return (
    <div className="bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Manage Bicycles</h2>

      <div className="flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-5xl overflow-auto max-h-[calc(100vh-100px)]">
          <TreeTable value={nodes} loading={loading} paginator rows={rows} first={first} totalRecords={totalRecords} onPage={onPage} className="w-full">
            <Column field="name" header="Bicycle Name" expander className="p-4"
              body={(rowData) => (
                <div className="flex items-center gap-2">
                  <img src={rowData.data.image} alt="Bicycle" className="w-12 h-12 object-cover rounded-md" />
                  <span>{rowData.data.name}</span>
                </div>
              )}
            />
            <Column field="brand" header="Brand" className="p-4" />
            <Column field="price" header="Price" className="p-4" />
            <Column field="quantity" header="Quantity" className="p-4" />
            <Column header="Update" 
              body={(rowData) => (
                <button className="p-2 bg-blue-500 text-white rounded" onClick={() => handleUpdateClick(rowData)}>
                  Update
                </button>
              )}
              className="p-4"
            />
            <Column header="Delete" 
              body={(rowData) => (
                <button className="p-2 bg-red-500 text-white rounded" onClick={() => handleDelete(rowData.key)}>
                  Delete
                </button>
              )}
              className="p-4"
            />
          </TreeTable>
        </div>
      </div>

      {/* Update Modal */}
      <Dialog header="Update Bicycle" visible={updateModalOpen} style={{ width: "450px" }} onHide={() => setUpdateModalOpen(false)}>
        <div className="space-y-4">
          <label className="block font-medium">Bicycle Name</label>
          <InputText className="w-full p-2 border rounded" value={selectedBicycle?.data.name || ""} onChange={(e) => setSelectedBicycle({ ...selectedBicycle, data: { ...selectedBicycle.data, name: e.target.value } })} />

          <label className="block font-medium">Brand</label>
          <InputText className="w-full p-2 border rounded" value={selectedBicycle?.data.brand || ""} onChange={(e) => setSelectedBicycle({ ...selectedBicycle, data: { ...selectedBicycle.data, brand: e.target.value } })} />

          <label className="block font-medium">Price ($)</label>
          <InputText type="number" className="w-full p-2 border rounded" value={selectedBicycle?.data.price || ""} onChange={(e) => setSelectedBicycle({ ...selectedBicycle, data: { ...selectedBicycle.data, price: Number(e.target.value) } })} />

          <label className="block font-medium">Quantity</label>
          <InputText type="number" className="w-full p-2 border rounded" value={selectedBicycle?.data.quantity || ""} onChange={(e) => setSelectedBicycle({ ...selectedBicycle, data: { ...selectedBicycle.data, quantity: Number(e.target.value) } })} />

          <div className="flex justify-end gap-2 mt-4">
            <Button label="Cancel" icon="pi pi-times" onClick={() => setUpdateModalOpen(false)} className="p-button-text" />
            <Button label="Save" icon="pi pi-check" onClick={handleUpdateSubmit} className="p-button-success" />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ManageBicycle;
