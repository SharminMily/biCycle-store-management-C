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
  useDeleteUserMutation,
  useGetUsersQuery,
  useUpdateUserMutation,
} from "../../../redux/features/admin/user/userApi";


const AllUser = () => {
  const { data: users, isLoading, refetch } = useGetUsersQuery(undefined);
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const handleUpdateClick = (user: any) => {
    setSelectedUser({ ...user }); // Deep copy
    setUpdateModalOpen(true);
  };

  const handleUpdateSubmit = async () => {
    if (!selectedUser) return;

    const toastId = toast.loading("Updating user...");
    try {
      await updateUser({
        id: selectedUser._id,
        data: {
          email: selectedUser.email,
          role: selectedUser.role,
          status: selectedUser.status,
        },
      }).unwrap();

      toast.success("User updated successfully!", { id: toastId });
      refetch();
      setUpdateModalOpen(false);
    } catch (error) {
      toast.error("Failed to update user", { id: toastId });
    }
  };

  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Deleting user...");
    try {
      await deleteUser(id).unwrap();
      toast.success("User deleted successfully!", { id: toastId });
      refetch();
    } catch (error) {
      toast.error("Failed to delete user", { id: toastId });
    }
  };

  // Role badge template
  const roleBodyTemplate = (rowData: any) => (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        rowData.role === "admin"
          ? "bg-purple-100 text-purple-800"
          : "bg-blue-100 text-blue-800"
      }`}
    >
      {rowData.role?.toUpperCase()}
    </span>
  );

  // Status badge template
  const statusBodyTemplate = (rowData: any) => (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        rowData.status === "active"
          ? "bg-green-100 text-green-800"
          : rowData.status === "blocked"
          ? "bg-red-100 text-red-800"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      {rowData.status?.charAt(0).toUpperCase() + rowData.status?.slice(1)}
    </span>
  );

  // Action buttons
  const actionBodyTemplate = (rowData: any) => (
    <div className="flex gap-3 justify-center">
      <button
        onClick={() => handleUpdateClick(rowData)}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition"
      >
        Update
      </button>
      <button
        onClick={() => handleDelete(rowData._id)}
        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow transition"
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
            Manage All Users
          </h1>
          <p className="text-lg text-gray-600">Control user roles, status, and access</p>
        </div>

        {/* Users Table Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900">User Directory</h2>
          </div>

          <div className="p-4 sm:p-6">
            <DataTable
              value={users?.data || []}
              loading={isLoading}
              responsiveLayout="scroll"
              paginator
              rows={10}
              rowsPerPageOptions={[10, 20, 50]}
              paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="{first} - {last} of {totalRecords} users"
              emptyMessage="No users found."
              className="w-full"
            >
              <Column
                field="name"
                header="Name"
                sortable
                className="font-medium"
              />
              <Column
                field="email"
                header="Email"
                sortable
                body={(rowData) => (
                  <span className="break-all">{rowData.email}</span>
                )}
              />
              <Column
                field="role"
                header="Role"
                sortable
                body={roleBodyTemplate}
                className="text-center"
              />
              <Column
                field="status"
                header="Status"
                sortable
                body={statusBodyTemplate}
                className="text-center"
              />
              <Column
                header="Actions"
                body={actionBodyTemplate}
                className="text-center"
              />
            </DataTable>
          </div>
        </div>
      </div>

      {/* Update User Modal */}
      <Dialog
        header="Update User"
        visible={updateModalOpen}
        onHide={() => setUpdateModalOpen(false)}
        style={{ width: "90vw", maxWidth: "500px" }}
        breakpoints={{ "960px": "75vw", "641px": "95vw" }}
      >
        {selectedUser && (
          <div className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <InputText
                value={selectedUser.name || ""}
                disabled
                className="w-full bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <InputText
                value={selectedUser.email}
                onChange={(e) =>
                  setSelectedUser({ ...selectedUser, email: e.target.value })
                }
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Role</label>
              <select
                value={selectedUser.role}
                onChange={(e) =>
                  setSelectedUser({ ...selectedUser, role: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Status</label>
              <select
                value={selectedUser.status}
                onChange={(e) =>
                  setSelectedUser({ ...selectedUser, status: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="active">Active</option>
                <option value="blocked">Blocked</option>
                <option value="pending">Pending</option>
              </select>
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

export default AllUser;