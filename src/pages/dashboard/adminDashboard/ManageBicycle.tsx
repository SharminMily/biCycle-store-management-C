/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
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
  const { data: products, isLoading, refetch } = useGetProductsQuery(undefined);
  const [updateProduct] = useUpdateProductsMutation();
  const [deleteProduct] = useDeleteProductsMutation();

  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedBicycle, setSelectedBicycle] = useState<any>(null);

  const handleUpdateClick = (bicycle: any) => {
    setSelectedBicycle({ ...bicycle }); // Deep copy to avoid mutation issues
    setUpdateModalOpen(true);
  };

  const handleUpdateSubmit = async () => {
    if (!selectedBicycle) return;

    const toastId = toast.loading("Updating bicycle...");
    try {
      await updateProduct({
        id: selectedBicycle._id,
        data: {
          name: selectedBicycle.name,
          brand: selectedBicycle.brand,
          price: Number(selectedBicycle.price),
          quantity: Number(selectedBicycle.quantity),
        },
      }).unwrap();

      toast.success("Bicycle updated successfully!", { id: toastId });
      refetch();
      setUpdateModalOpen(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to update bicycle", { id: toastId });
    }
  };

  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Deleting bicycle...");
    try {
      await deleteProduct(id).unwrap();
      toast.success("Bicycle deleted successfully!", { id: toastId });
      refetch();
    } catch (error) {
      toast.error("Failed to delete bicycle", { id: toastId });
    }
  };

  // Image body template
  const imageBodyTemplate = (rowData: any) => (
    <img
      src={rowData.image}
      alt={rowData.name}
      className="w-16 h-16 object-cover rounded-lg shadow-md border border-gray-200"
    />
  );

  // Action buttons template
  const actionBodyTemplate = (rowData: any) => (
    <div className="flex gap-3 justify-center">
      <button
        onClick={() => handleUpdateClick(rowData)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow transition"
      >
        Update
      </button>
      <button
        onClick={() => handleDelete(rowData._id)}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow transition"
      >
        Delete
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8 px-4 sm:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-thin text-gray-900 mb-2">
            Manage Bicycles
          </h1>
          <p className="text-lg text-gray-600">View, update, or remove products from inventory</p>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900">Product Inventory</h2>
          </div>

          <div className="p-4 sm:p-6">
            <DataTable
              value={products?.data || []}
              loading={isLoading}
              responsiveLayout="scroll"
              paginator
              rows={10}
              rowsPerPageOptions={[10, 20, 50]}
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="{first} to {last} of {totalRecords}"
              className="w-full"
              emptyMessage="No bicycles found."
            >
              <Column
                header="Image"
                body={imageBodyTemplate}
                className="text-center"
              />
              <Column
                field="name"
                header="Bicycle Name"
                sortable
                className="font-medium"
              />
              <Column field="brand" header="Brand" sortable />
              <Column
                field="price"
                header="Price"
                sortable
                body={(rowData) => `$${Number(rowData.price).toFixed(2)}`}
              />
              <Column field="quantity" header="Stock" sortable />
              <Column
                header="Actions"
                body={actionBodyTemplate}
                className="text-center"
              />
            </DataTable>
          </div>
        </div>
      </div>

      {/* Update Modal */}
      <Dialog
        header="Update Bicycle"
        visible={updateModalOpen}
        onHide={() => setUpdateModalOpen(false)}
        style={{ width: "90vw", maxWidth: "500px" }}
        breakpoints={{ "960px": "75vw", "641px": "90vw" }}
      >
        {selectedBicycle && (
          <div className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Bicycle Name</label>
              <InputText
                value={selectedBicycle.name}
                onChange={(e) =>
                  setSelectedBicycle({ ...selectedBicycle, name: e.target.value })
                }
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Brand</label>
              <InputText
                value={selectedBicycle.brand}
                onChange={(e) =>
                  setSelectedBicycle({ ...selectedBicycle, brand: e.target.value })
                }
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Price ($)</label>
                <InputText
                  type="number"
                  value={selectedBicycle.price}
                  onChange={(e) =>
                    setSelectedBicycle({
                      ...selectedBicycle,
                      price: Number(e.target.value),
                    })
                  }
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Quantity</label>
                <InputText
                  type="number"
                  value={selectedBicycle.quantity}
                  onChange={(e) =>
                    setSelectedBicycle({
                      ...selectedBicycle,
                      quantity: Number(e.target.value),
                    })
                  }
                  className="w-full"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <Button
                label="Cancel"
                onClick={() => setUpdateModalOpen(false)}
                className="p-button-secondary"
              />
              <Button
                label="Save Changes"
                onClick={handleUpdateSubmit}
                className="p-button-success"
              />
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
};

export default ManageBicycle;