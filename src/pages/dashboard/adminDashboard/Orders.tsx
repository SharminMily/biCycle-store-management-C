/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { TreeTable, TreeTablePageEvent } from "primereact/treetable";
import { Column } from "primereact/column";
import { TreeNode } from "primereact/treenode";
import { toast } from "sonner";
import { useDeleteOrderMutation, useGetOrdersQuery } from "../../../redux/features/order/orderApi";

const Orders = () => {
  const { data: responseData, isFetching, refetch } = useGetOrdersQuery(undefined);
  const orders = responseData?.data || []; // Access orders from the response
  const [deleteOrder] = useDeleteOrderMutation(); // Mutation to delete orders

  const [nodes, setNodes] = useState<TreeNode[]>([]); // To store table rows
  const [first, setFirst] = useState<number>(0); // Pagination start
  const [rows, setRows] = useState<number>(15); // Rows per page
  const [totalRecords, setTotalRecords] = useState<number>(0); // Total number of records
  const [loading, setLoading] = useState<boolean>(isFetching); // Loading state

  useEffect(() => {
    if (Array.isArray(orders)) {
      const tableData: TreeNode[] = orders.map(({ _id, transaction, user, totalPrice, status }) => ({
        key: _id,
        data: { transaction, user, totalPrice, status },
        leaf: true,
      }));

      setTotalRecords(orders.length); // Update total records
      setNodes(tableData.slice(first, first + rows)); // Set table rows for pagination
      setLoading(false); // Data is fetched, stop loading
    } else {
      console.error("Orders is not an array:", orders); // Log the type of `orders` if it's not an array
    }
  }, [orders, first, rows]);

  // Handle pagination
  const onPage = (event: TreeTablePageEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  // Handle order deletion
  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Deleting...");
    try {
      await deleteOrder(id).unwrap();
      toast.success("Order deleted successfully!", { id: toastId });
      refetch();
    } catch (error) {
      toast.error("Failed to delete order", { id: toastId });
    }
  };

  return (
    <div className="bg-gray-100 p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 text-gray-800">
        Manage All Orders
      </h2>

      <div className="flex justify-center">
        <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-5xl overflow-x-auto">
          <TreeTable
            value={nodes}
            loading={loading}
            paginator
            rows={rows}
            first={first}
            totalRecords={totalRecords}
            onPage={onPage}
            className="w-full min-w-[600px]"
          >
            <Column field="transaction.sp_code" header="Transaction Code" className="p-2 md:p-4 text-xs md:text-sm" />
            <Column field="user" header="User ID" className="p-2 md:p-4 text-xs md:text-sm" />

            <Column field="totalPrice" header="Total Price" className="p-4 md:p-4 text-xs md:text-sm" />

            <Column field="status" header="Status" className="p-2 md:p-4 text-xs md:text-sm" />

            <Column
              header="Delete"
              body={(rowData) => (
                <button
                  className="p-1 md:p-2 bg-red-500 text-white rounded text-xs md:text-sm"
                  onClick={() => handleDelete(rowData.key)}
                >
                  Delete
                </button>
              )}
              className="p-2 md:p-4"
            />
          </TreeTable>
        </div>
      </div>
    </div>
  );
};

export default Orders;
