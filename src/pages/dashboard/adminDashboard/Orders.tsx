/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { toast } from "sonner";
import {
  useDeleteOrderMutation,
  useGetOrdersQuery,
} from "../../../redux/features/order/orderApi";

const Orders = () => {
  const { data: responseData, isLoading, refetch } = useGetOrdersQuery(undefined);
  const orders = responseData?.data || [];
  const [deleteOrder] = useDeleteOrderMutation();

  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Deleting order...");
    try {
      await deleteOrder(id).unwrap();
      toast.success("Order deleted successfully!", { id: toastId });
      refetch();
    } catch (error) {
      toast.error("Failed to delete order", { id: toastId });
    }
  };

  // Status badge template
  const statusBodyTemplate = (rowData: any) => {
    const status = rowData.status?.toLowerCase() || "pending";
    const colorMap: Record<string, { bg: string; text: string }> = {
      paid: { bg: "bg-green-100 text-green-800", text: "Paid" },
      pending: { bg: "bg-yellow-100 text-yellow-800", text: "Pending" },
      failed: { bg: "bg-red-100 text-red-800", text: "Failed" },
      cancelled: { bg: "bg-gray-100 text-gray-800", text: "Cancelled" },
    };

    const { bg, text } = colorMap[status] || colorMap.pending;

    return (
      <span className={`px-4 py-2 rounded-full text-sm font-bold ${bg}`}>
        {text}
      </span>
    );
  };

  // Price formatting
  const priceBodyTemplate = (rowData: any) => (
    <span className="text-lg font-semibold text-gray-900">
      ${Number(rowData.totalPrice).toFixed(2)}
    </span>
  );

  // Transaction code
  const transactionBodyTemplate = (rowData: any) => (
    <span className="font-mono text-sm text-gray-700">
      {rowData.transaction?.sp_code || "N/A"}
    </span>
  );

  // User email or ID
  const userBodyTemplate = (rowData: any) => (
    <div>
      <p className="font-medium text-gray-900">{rowData.user?.name || "N/A"}</p>
      <p className="text-sm text-gray-500 break-all">{rowData.user?.email || rowData.user?._id || "N/A"}</p>
    </div>
  );

  // Delete button
  const actionBodyTemplate = (rowData: any) => (
    <button
      onClick={() => handleDelete(rowData._id)}
      className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow transition"
    >
      Delete
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8 px-4 sm:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-thin text-gray-900 mb-2">
            Manage All Orders
          </h1>
          <p className="text-lg text-gray-600">
            Track and manage customer orders across the platform
          </p>
        </div>

        {/* Orders Table Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900">
              Order History ({orders.length} orders)
            </h2>
          </div>

          <div className="p-4 sm:p-6">
            <DataTable
              value={orders}
              loading={isLoading}
              responsiveLayout="scroll"
              paginator
              rows={10}
              rowsPerPageOptions={[10, 20, 50]}
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="{first} - {last} of {totalRecords} orders"
              emptyMessage="No orders found."
              className="w-full"
            >
              <Column
                header="Customer"
                body={userBodyTemplate}
                sortable
                sortField="user.name"
                className="min-w-[180px]"
              />
              <Column
                header="Transaction Code"
                body={transactionBodyTemplate}
                className="font-mono min-w-[140px]"
              />
              <Column
                header="Total Amount"
                body={priceBodyTemplate}
                sortable
                sortField="totalPrice"
                className="text-right min-w-[120px]"
              />
              <Column
                header="Status"
                body={statusBodyTemplate}
                sortable
                sortField="status"
                className="text-center min-w-[120px]"
              />
              <Column
                header="Action"
                body={actionBodyTemplate}
                className="text-center min-w-[120px]"
              />
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;