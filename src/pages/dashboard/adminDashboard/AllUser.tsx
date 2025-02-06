/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { TreeTable, TreeTablePageEvent } from "primereact/treetable";
import { Column } from "primereact/column";
import { TreeNode } from "primereact/treenode";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { toast } from "sonner";
import { useDeleteUserMutation, useGetUsersQuery, useUpdateUserMutation } from "../../../redux/features/admin/user/userApi";

const AllUser = () => {
  const { data: users, isFetching, refetch } = useGetUsersQuery(undefined);
  const [updateProduct] = useUpdateUserMutation();
  const [deleteProduct] = useDeleteUserMutation();

  const [nodes, setNodes] = useState<TreeNode[]>([]);
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(15);
  const [totalRecords, setTotalRecords] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(isFetching);

  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  useEffect(() => {
    if (users?.data) {
      const tableData: TreeNode[] = users.data.map(({ _id, name, email, role, status }) => ({
        key: _id,
        data: { name, email, role, status },
        leaf: true,
      }));

      setTotalRecords(users.data.length);
      setNodes(tableData.slice(first, first + rows));
      setLoading(false);
    }
  }, [users, first, rows]);

  const onPage = (event: TreeTablePageEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const handleUpdateClick = (user: any) => {
    setSelectedUser(user);
    setUpdateModalOpen(true);
  };

  const handleUpdateSubmit = async () => {
    if (!selectedUser) return;
    const toastId = toast.loading("Updating...");

    try {
      await updateProduct({ id: selectedUser.key, data: { ...selectedUser.data } }).unwrap();
      toast.success("User updated successfully!", { id: toastId });
      refetch();
      setUpdateModalOpen(false);
    } catch (error) {
      toast.error("Failed to update user", { id: toastId });
    }
  };

  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Deleting...");
    try {
      await deleteProduct(id).unwrap();
      toast.success("User deleted successfully!", { id: toastId });
      refetch();
    } catch (error) {
      toast.error("Failed to delete user", { id: toastId });
    }
  };

  return (
    <div className="bg-gray-100 p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 text-gray-800">
        Manage All Users
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
            <Column field="name" header="name" className="p-2 md:p-4 text-xs md:text-sm" />
            <Column field="email" header="Email" className="p-2 md:p-4 text-xs md:text-sm" />
            <Column field="role" header="Role" className="p-2 md:p-4 text-xs md:text-sm" />
            <Column field="status" header="Status" className="p-2 md:p-4 text-xs md:text-sm" />

            <Column
              header="Update"
              body={(rowData) => (
                <button
                  className="p-1 md:p-2 bg-blue-500 text-white rounded text-xs md:text-sm"
                  onClick={() => handleUpdateClick(rowData)}
                >
                  Update
                </button>
              )}
              className="p-2 md:p-4"
            />

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

      {/* Update Modal */}
      <Dialog
        header="Update User"
        visible={updateModalOpen}
        style={{ width: "90%", maxWidth: "450px" }}
        onHide={() => setUpdateModalOpen(false)}
      >
        <div className="space-y-3">
          <label className="block font-medium">Email</label>
          <InputText
            className="w-full p-2 border rounded"
            value={selectedUser?.data.email || ""}
            onChange={(e) =>
              setSelectedUser({
                ...selectedUser,
                data: { ...selectedUser.data, email: e.target.value },
              })
            }
          />

          <label className="block font-medium">Role</label>
          <InputText
            className="w-full p-2 border rounded"
            value={selectedUser?.data.role || ""}
            onChange={(e) =>
              setSelectedUser({
                ...selectedUser,
                data: { ...selectedUser.data, role: e.target.value },
              })
            }
          />

          <label className="block font-medium">Status</label>
          <InputText
            className="w-full p-2 border rounded"
            value={selectedUser?.data.status || ""}
            onChange={(e) =>
              setSelectedUser({
                ...selectedUser,
                data: { ...selectedUser.data, status: e.target.value },
              })
            }
          />

          <div className="flex justify-end gap-2 mt-4">
            <Button
              label="Cancel"
              icon="pi pi-times"
              onClick={() => setUpdateModalOpen(false)}
              className="p-button-text"
            />
            <Button
              label="Save"
              icon="pi pi-check"
              onClick={handleUpdateSubmit}
              className="p-button-success"
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default AllUser;
