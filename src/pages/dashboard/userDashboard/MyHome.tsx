/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  selectCurrentUser,
  selectAuthLoading,
  setUser,
  setLoading,
} from "../../../redux/features/auth/authSlice";
import { TUser } from "../../../redux/features/auth/authSlice";
import {
  Bike,
  Mail,
  User,
  Shield,
  Calendar,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import { format } from "date-fns";
import { Navigate } from "react-router-dom";
import { useGetMeQuery } from "../../../redux/features/admin/user/userApi";


const UserHome = () => {
  const dispatch = useAppDispatch();
  const reduxUser = useAppSelector(selectCurrentUser);
  const isLoadingRedux = useAppSelector(selectAuthLoading);

  const {
    data: meData,
    isLoading: isLoadingMe,
    isError,
  } = useGetMeQuery(undefined, {
    skip: !reduxUser, 
  });

 
  if (meData?.data && reduxUser?._id !== meData.data._id) {
    dispatch(setUser({ user: meData.data, token: localStorage.getItem("token") }));
  }


  const isLoading = isLoadingRedux || isLoadingMe;


  if (!isLoading && (!reduxUser || isError)) {
    return <Navigate to="/login" replace />;
  }

 
  const user: TUser = (meData?.data || reduxUser) as TUser;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Bike className="w-16 h-16 text-red-600 animate-spin mx-auto mb-4" />
          <p className="text-xl text-gray-600">Loading your profile...</p>
        </div>
      </div>
    );
  }

  const joinedDate = user.createdAt
    ? format(new Date(user.createdAt), "MMMM d, yyyy")
    : "N/A";

  const lastUpdated = user.updatedAt
    ? format(new Date(user.updatedAt), "MMMM d, yyyy")
    : "N/A";

  const locationText =
    user.city && user.city !== "N/A" && user.address && user.address !== "N/A"
      ? `${user.city}, ${user.address}`
      : user.address !== "N/A" ? user.address : user.city !== "N/A" ? user.city : "Not Provided";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8 px-4 sm:py-12 lg:py-16">
    
      <div className="max-w-7xl mx-auto text-center mb-12 lg:mb-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin text-black tracking-tight mb-4">
          Welcome Back
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 font-light capitalize">
          {user.name}
        </p>
        <div className="mt-8 flex justify-center">
          <Bike className="w-16 h-16 sm:w-20 sm:h-20 text-red-600 animate-pulse" />
        </div>
      </div>

      {/* Main Dashboard Card */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl lg:rounded-4xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="h-2 bg-gradient-to-r from-red-600 via-orange-500 to-green-600" />

          <div className="p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-center text-black mb-12 tracking-wide">
              Your Profile Dashboard
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Left: Personal Info */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-inner border border-gray-200">
                <div className="flex flex-col sm:flex-row items-center gap-8 mb-10">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-gradient-to-br from-red-600 to-green-600 rounded-full flex items-center justify-center shadow-2xl">
                    <User className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-sm uppercase tracking-widest text-gray-500">
                      Account Holder
                    </p>
                    <h3 className="text-3xl sm:text-4xl font-bold text-black mt-2 capitalize">
                      {user.name}
                    </h3>
                    <span className="inline-block mt-3 px-5 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                      {user.role}
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-5">
                    <Mail className="w-7 h-7 text-green-600" />
                    <div>
                      <p className="text-gray-500 text-sm">Email Address</p>
                      <p className="text-xl font-medium text-black break-all">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <Phone className="w-7 h-7 text-blue-600" />
                    <div>
                      <p className="text-gray-500 text-sm">Phone</p>
                      <p className="text-xl font-medium text-black">
                        {user.phone && user.phone !== "N/A" ? user.phone : "Not Provided"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <MapPin className="w-7 h-7 text-red-600" />
                    <div>
                      <p className="text-gray-500 text-sm">Location</p>
                      <p className="text-xl font-medium text-black">
                        {locationText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Account Stats */}
              <div className="bg-gradient-to-bl from-red-50/50 to-green-50/50 rounded-3xl p-8 shadow-inner border border-gray-200">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-center text-black mb-10">
                  Account Information
                </h3>

                <div className="space-y-8">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-5 border-b border-gray-300">
                    <div className="flex items-center gap-5 mb-4 sm:mb-0">
                      <Calendar className="w-8 h-8 text-green-600" />
                      <span className="text-lg sm:text-xl text-gray-700">
                        Member Since
                      </span>
                    </div>
                    <span className="font-bold text-black text-lg sm:text-xl">
                      {joinedDate}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-5 border-b border-gray-300">
                    <div className="flex items-center gap-5 mb-4 sm:mb-0">
                      <Clock className="w-8 h-8 text-orange-600" />
                      <span className="text-lg sm:text-xl text-gray-700">
                        Last Updated
                      </span>
                    </div>
                    <span className="font-bold text-black text-lg sm:text-xl">
                      {lastUpdated}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-5">
                    <div className="flex items-center gap-5 mb-4 sm:mb-0">
                      <Shield className="w-8 h-8 text-red-600" />
                      <span className="text-lg sm:text-xl text-gray-700">
                        Account Status
                      </span>
                    </div>
                    <span
                      className={`px-6 py-3 rounded-full text-lg font-bold ${
                        user.status === "in-progress"
                          ? "bg-yellow-100 text-yellow-700"
                          : user.status === "blocked"
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {user.status === "in-progress"
                        ? "Active (In Progress)"
                        : user.status === "blocked"
                        ? "Blocked"
                        : "Active"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <p className="text-gray-600 text-lg sm:text-xl mb-10 px-6">
                Ready to hit the road? Discover premium bikes or track your rentals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                <button className="px-12 py-5 bg-gradient-to-r from-red-600 to-green-600 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-red-600/30 transform hover:scale-105 transition-all duration-300">
                  Explore Bikes
                </button>
                <button className="px-12 py-5 border-4 border-black text-black font-bold text-xl rounded-full hover:bg-black hover:text-white transform hover:scale-105 transition-all duration-300">
                  My Rentals
                </button>
              </div>
            </div>
          </div>

          <div className="h-2 bg-gradient-to-l from-green-600 to-red-600" />
        </div>
      </div>
    </div>
  );
};

export default UserHome;