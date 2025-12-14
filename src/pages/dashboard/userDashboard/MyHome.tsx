/* eslint-disable @typescript-eslint/no-explicit-any */

import { TUser } from "../../../redux/features/auth/authSlice";
import { useAppSelector } from "../../../redux/hooks";
import { Bike, Mail, User, Shield, Calendar } from "lucide-react";

const UserHome = () => {
  const user = useAppSelector((state) => state.auth.user) as TUser;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-8 px-4 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      {/* Welcome Header - Ultra Responsive */}
      <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-thin text-black tracking-tight sm:tracking-wider md:tracking-widest mb-4 sm:mb-6">
          Welcome Back
        </h1>
        <p className="text-xl xs:text-2xl sm:text-3xl md:text-4xl text-gray-700 font-light">
          {user?.name || user?.email?.split("@")[0] || "Rider"}
        </p>
        <div className="mt-8 flex justify-center">
          <Bike className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-red-600 animate-pulse" />
        </div>
      </div>

      {/* Main Dashboard Card - Perfectly Responsive */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl sm:rounded-3xl md:rounded-4xl shadow-lg sm:shadow-xl lg:shadow-2xl overflow-hidden">
          {/* Gradient Accent Bar */}
          <div className="h-1.5 sm:h-2 md:h-3 bg-gradient-to-r from-red-600 via-red-500 to-green-600" />

          <div className="p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-extralight text-center text-black mb-10 sm:mb-12 md:mb-14 tracking-wide">
              Your Profile Overview
            </h2>

            {/* Fully Responsive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
              {/* Profile Card */}
              <div className="bg-gradient-to-br from-gray-50/80 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-inner border border-gray-100">
                <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 mb-8 sm:mb-10">
                  <div className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-red-600 rounded-full flex items-center justify-center shadow-2xl flex-shrink-0">
                    <User className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-sm xs:text-base text-gray-500 uppercase tracking-widest">Account Holder</p>
                    <p className="text-2xl xs:text-3xl sm:text-4xl font-bold text-black mt-2">
                      {user?.name || "Guest Rider"}
                    </p>
                  </div>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <Mail className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm xs:text-base text-gray-500">Email</p>
                      <p className="text-lg xs:text-xl font-medium text-black break-all">{user?.email || "N/A"}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 sm:gap-6">
                    <Shield className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-red-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm xs:text-base text-gray-500">Role</p>
                      <p className="text-lg xs:text-xl font-medium text-black capitalize">
                        {user?.role || "user"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Details Card */}
              <div className="bg-gradient-to-bl from-red-50/40 to-green-50/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-inner border border-gray-100">
                <h3 className="text-2xl xs:text-3xl sm:text-4xl font-light text-black mb-8 sm:mb-10 text-center">Account Details</h3>

                <div className="space-y-6 sm:space-y-8">
                  <div className="flex flex-col xs:flex-row xs:items-center justify-between py-4 border-b border-gray-200">
                    <div className="flex items-center gap-4 mb-3 xs:mb-0">
                      <Calendar className="w-6 h-6 xs:w-7 xs:h-7 text-gray-600 flex-shrink-0" />
                      <span className="text-base xs:text-lg text-gray-700">Member Since</span>
                    </div>
                    <span className="font-semibold text-black text-base xs:text-lg text-right xs:text-left">
                      {user?.iat ? new Date(user.iat * 1000).toLocaleDateString() : "N/A"}
                    </span>
                  </div>

                  <div className="flex flex-col xs:flex-row xs:items-center justify-between py-4 border-b border-gray-200">
                    <div className="flex items-center gap-4 mb-3 xs:mb-0">
                      <Shield className="w-6 h-6 xs:w-7 xs:h-7 text-green-600 flex-shrink-0" />
                      <span className="text-base xs:text-lg text-gray-700">Token Expires</span>
                    </div>
                    <span className="font-semibold text-black text-base xs:text-lg text-right xs:text-left">
                      {user?.exp ? new Date(user.exp * 1000).toLocaleDateString() : "N/A"}
                    </span>
                  </div>

                  <div className="flex flex-col xs:flex-row xs:items-center justify-between py-4">
                    <div className="flex items-center gap-4 mb-3 xs:mb-0">
                      <Bike className="w-6 h-6 xs:w-7 xs:h-7 text-red-600 flex-shrink-0" />
                      <span className="text-base xs:text-lg text-gray-700">Status</span>
                    </div>
                    <span className="px-4 py-2 xs:px-6 xs:py-3 bg-green-100 text-green-700 rounded-full text-sm xs:text-base font-bold">
                      Active Rider
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Super Responsive */}
            <div className="mt-12 sm:mt-16 md:mt-20 text-center">
              <p className="text-gray-600 mb-8 sm:mb-10 text-base sm:text-lg md:text-xl px-6">
                Ready for your next ride? Explore the shop or check your orders.
              </p>
              <div className="flex flex-col xs:flex-row justify-center gap-6 sm:gap-8">
                <button className="w-full xs:w-auto px-10 py-4 sm:px-12 sm:py-5 bg-red-600 text-white font-semibold rounded-full shadow-xl hover:bg-gradient-to-r hover:from-red-600 hover:to-green-600 hover:shadow-2xl transition-all duration-500 text-lg sm:text-xl">
                  Browse Bikes
                </button>
                <button className="w-full xs:w-auto px-10 py-4 sm:px-12 sm:py-5 border-3 border-black text-black font-semibold rounded-full hover:bg-black hover:text-white transition-all duration-500 text-lg sm:text-xl">
                  View Orders
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Gradient Accent */}
          <div className="h-1.5 sm:h-2 md:h-3 bg-gradient-to-l from-green-600 to-green-500" />
        </div>
      </div>
    </div>
  );
};

export default UserHome;