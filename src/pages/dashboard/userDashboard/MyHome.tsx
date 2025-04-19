/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { TUser } from "../../../types/userManagement.type";
import { useSelector } from "react-redux";
import { useGetUserByIdQuery } from "../../../redux/features/auth/authApi";

const UserHome = () => {
  const { user } = useSelector((state: any) => state.auth); // this gives you userId
  const { data: fullUser, isLoading } = useGetUserByIdQuery(user);
 console.log(fullUser)
  if (isLoading) return <p>Loading user info...</p>;

  // Fake user data for testing
  // const fakeUserData = {
  //   _id: "67a6215680b75813b915ff21",
  //   email: "user@example.com",
  //   name: "John Doe",
  //   totalPrice: 320,
  //   status: "Active",
  //   transaction: {
  //     id: "sp_code_1011",
  //   },
  // };

  // const [userDetails, setUserDetails] = useState<any>(null);

  // useEffect(() => {
  //   // Simulate fetching user data
  //   setUserDetails(fakeUserData);
  // }, []);

  return (
    <div className=" my-24 p-24 bg-gray-50 flex justify-center items-center">
      <div>
      <h2>User Info</h2>
      <p>Name: {fullUser?.name}</p>
      <p>Email: {fullUser?.email}</p>
      <p>Role: {fullUser?.role}</p>
    </div>
      {/* <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg mx-4">
        {userDetails ? (
          <div>
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">User Details</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <strong className="text-lg text-gray-700">User ID:</strong>
                <span className="text-gray-500">{userDetails._id}</span>
              </div>

              <div className="flex justify-between items-center">
                <strong className="text-lg text-gray-700">Email:</strong>
                <span className="text-gray-500">{user?.email}</span>
              </div>

              <div className="flex justify-between items-center">
                <strong className="text-lg text-gray-700">Name:</strong>
                <span className="text-gray-500">{userDetails.name}</span>
              </div>

              <div className="flex justify-between items-center">
                <strong className="text-lg text-gray-700">Total Price:</strong>
                <span className="text-gray-500">${userDetails.totalPrice}</span>
              </div>

              <div className="flex justify-between items-center">
                <strong className="text-lg text-gray-700">Status:</strong>
                <span className="text-gray-500">{userDetails.status}</span>
              </div>

              <div className="flex justify-between items-center">
                <strong className="text-lg text-gray-700">Transaction ID:</strong>
                <span className="text-gray-500">{userDetails.transaction.id}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">Loading...</div>
        )}
      </div> */}
    </div>
  );
};

export default UserHome;
