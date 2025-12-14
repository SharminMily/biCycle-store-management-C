import { useSearchParams } from "react-router-dom";
import { useVerifyOrderQuery } from "../../redux/features/order/orderApi";
import { Key } from "react";
import { CheckCircle, XCircle, Package, CreditCard, User, ShoppingBag } from "lucide-react";

const VerifyOrder = () => {
  const [searchParams] = useSearchParams();
  const { isLoading, data } = useVerifyOrderQuery(searchParams.get("order_id"), {
    refetchOnMountOrArgChange: true,
  });

  const order = data?.data?.order || {};
  const payment = data?.data?.payment || {};
  const user = order?.user || {};
  const products = order?.products || [];

  const orderStatus = order?.status || "Pending";
  const isPaid = orderStatus === "Paid";

  return isLoading ? (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-base text-gray-600 animate-pulse">Loading...</div>
    </div>
  ) : (
    <div className="min-h-screen bg-white">
      {/* Container with responsive padding – no max-width to use full screen on tablet (1024px) */}
      <div className="w-full px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Order Verification
          </h1>
          <div className="flex flex-col items-center gap-3">
            {isPaid ? (
              <CheckCircle className="w-12 h-12 sm:w-14 sm:h-14 text-green-600" />
            ) : (
              <XCircle className="w-12 h-12 sm:w-14 sm:h-14 text-red-600" />
            )}
            <p className={`text-lg sm:text-xl md:text-2xl font-medium ${isPaid ? "text-green-700" : "text-red-700"}`}>
              {isPaid ? "Payment Successful" : "Payment Pending"}
            </p>
          </div>
        </div>

        {/* Order & Payment – stacked on all devices except very large desktop */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
          {/* Order Details */}
          <div className="bg-gray-50 rounded-xl shadow-md p-5 sm:p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-5">
              <Package className="w-6 h-6 text-red-600 flex-shrink-0" />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Order Details</h2>
            </div>
            <div className="space-y-4 text-sm sm:text-base">
              <div>
                <p className="text-gray-600 font-medium">Order ID</p>
                <p className="font-mono text-gray-800 break-all mt-1">{order?._id || "N/A"}</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Total Amount</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                  ${order?.totalPrice?.toFixed(2) || "0.00"}
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-600 font-medium mb-2">Status</p>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-bold ${
                    isPaid ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {orderStatus}
                </span>
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="bg-gray-50 rounded-xl shadow-md p-5 sm:p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-5">
              <CreditCard className="w-6 h-6 text-green-600 flex-shrink-0" />
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Payment Information</h2>
            </div>
            <div className="space-y-4 text-sm sm:text-base">
              <div>
                <p className="text-gray-600 font-medium">SP Code</p>
                <p className="text-gray-800 mt-1">{payment?.sp_code || "N/A"}</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Message</p>
                <p className="text-gray-800 break-words mt-1">{payment?.message || "N/A"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Information */}
        <div className="bg-gray-50 rounded-xl shadow-md p-5 sm:p-6 border border-gray-200 mb-8">
          <div className="flex items-center gap-3 mb-5">
            <User className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Customer Information</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm sm:text-base">
            <div>
              <p className="text-gray-600 font-medium">Name</p>
              <p className="text-gray-900 mt-1">{user?.name || "N/A"}</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium">Email</p>
              <p className="text-gray-900 break-all mt-1">{user?.email || "N/A"}</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium">Phone</p>
              <p className="text-gray-900 mt-1">{user?.phone || "N/A"}</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium">Address</p>
              <p className="text-gray-900 mt-1">{user?.address || "N/A"}</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium">City</p>
              <p className="text-gray-900 mt-1">{user?.city || "N/A"}</p>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="bg-gray-50 rounded-xl shadow-md p-5 sm:p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-5">
            <ShoppingBag className="w-6 h-6 text-purple-600 flex-shrink-0" />
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Ordered Products</h2>
          </div>
          {products.length > 0 ? (
            <div className="space-y-4">
              {products.map((item: any, index: Key) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-200"
                >
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="font-medium text-gray-900 text-base sm:text-lg">
                        {item?.product?.name || "Unknown Product"}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">ID: {item?.product?._id || "N/A"}</p>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm sm:text-base text-gray-700">
                      <span>
                        Qty: <strong className="text-gray-900">{item?.quantity || 0}</strong>
                      </span>
                      <span>
                        Price: <strong className="text-gray-900">
                          ${item?.product?.price?.toFixed(2) || "0.00"}
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-8 text-base">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyOrder;