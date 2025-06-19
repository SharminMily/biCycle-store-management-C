/* eslint-disable @typescript-eslint/no-explicit-any */

import { TUser } from "../../../redux/features/auth/authSlice";
import { useAppSelector } from "../../../redux/hooks";

const UserHome = () => {
  const user = useAppSelector((state) => state.auth.user) as TUser;
 // console.log("Redux User:", user);
  ///console.log(" User:", user?.email);
  return (
    <div className=" my-24 p-24 bg-gray-50 flex justify-center items-center">      
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg mx-4">
        {user ? (
          <div>
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">User Details</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <strong className="text-lg text-gray-700">User ID:</strong>
                <span className="text-gray-500">{user?.user}</span>
              </div>

              <div className="flex justify-between items-center">
                <strong className="text-lg text-gray-700">Exp:</strong>
                <span className="text-gray-500">{user?.
exp
}</span>
              </div>

              <div className="flex justify-between items-center">
                <strong className="text-lg text-gray-700">Iat:</strong>
                <span className="text-gray-500">{user.
iat}</span>
              </div>

              {/* <div className="flex justify-between items-center">
                <strong className="text-lg text-gray-700">Total Price:</strong>
                <span className="text-gray-500">${user.totalPrice}</span>
              </div> */}

              <div className="flex justify-between items-center">
                <strong className="text-lg text-gray-700">Status:</strong>
                <span className="text-gray-500">{user.role}</span>
              </div>

              {/* <div className="flex justify-between items-center">
                <strong className="text-lg text-gray-700">Transaction ID:</strong>
                <span className="text-gray-500">{userDetails.transaction.id}</span>
              </div> */}
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default UserHome;
