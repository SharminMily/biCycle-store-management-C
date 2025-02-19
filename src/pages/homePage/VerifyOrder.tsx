import { useSearchParams } from "react-router-dom";
import { useVerifyOrderQuery } from "../../redux/features/order/orderApi";
import { Key } from "react";

const VerifyOrder = () => {
  const [searchParams] = useSearchParams();
  const { isLoading, data } = useVerifyOrderQuery(searchParams.get("order_id"), {
    refetchOnMountOrArgChange: true,
  });

  // ✅ Extracting Order & Payment Details from API Response
  const order = data?.data?.order || {};
  const payment = data?.data?.payment || {};
  const user = order?.user || {};
  const products = order?.products || [];

  // ✅ Ensure status defaults to "Pending" if missing
  const orderStatus = order?.status ? order.status : "Pending";

  return isLoading ? (
    <div className="flex items-center justify-center h-screen text-white text-lg">Loading...</div>
  ) : (
    <div className="text-white bg-[#08031b] container mx-auto p-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Order Information</h1>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {/* ✅ Order Details */}
        <div className="border p-4 rounded-lg bg-[#12172a] shadow-lg">
          <h2 className="text-lg font-semibold mb-3">🛒 Order Details</h2>
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <dt className="font-semibold">Order ID:</dt>
            <dd className="truncate">{order?._id || "N/A"}</dd>

            <dt className="font-semibold">Total Price:</dt>
            <dd>${order?.totalPrice?.toFixed(2) || "0.00"}</dd>

            <dt className="font-semibold">Status:</dt>
            <dd>
            <span
  className={`px-2 py-1 rounded-md text-sm font-semibold ${
    orderStatus === "Paid" ? "bg-green-500 text-white" : "bg-red-500 text-white"
  }`}
>
  {orderStatus}
</span>

            </dd>
          </dl>
        </div>

        {/* ✅ Payment Details */}
        <div className="border p-4 rounded-lg bg-[#12172a] shadow-lg">
          <h2 className="text-lg font-semibold mb-3">💳 Payment Information</h2>
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <dt className="font-semibold">SP Code:</dt>
            <dd>{payment?.sp_code || "N/A"}</dd>

            <dt className="font-semibold">SP Message:</dt>
            <dd className="truncate">{payment?.message || "N/A"}</dd>
          </dl>
        </div>

        {/* ✅ User Details */}
        <div className="border p-4 rounded-lg bg-[#12172a] shadow-lg">
          <h2 className="text-lg font-semibold mb-3">👤 Customer Information</h2>
          <dl className="grid grid-cols-2 gap-3 text-sm">
            <dt className="font-semibold">User ID:</dt>
            <dd className="truncate">{user?._id || "N/A"}</dd>

            <dt className="font-semibold">Name:</dt>
            <dd>{user?.name || "N/A"}</dd>

            <dt className="font-semibold">Email:</dt>
            <dd className="truncate">{user?.email || "N/A"}</dd>

            <dt className="font-semibold">Phone:</dt>
            <dd>{user?.phone || "N/A"}</dd>

            <dt className="font-semibold">Address:</dt>
            <dd>{user?.address || "N/A"}</dd>

            <dt className="font-semibold">City:</dt>
            <dd>{user?.city || "N/A"}</dd>
          </dl>
        </div>

        {/* ✅ Product Details */}
        <div className="border p-4 rounded-lg bg-[#12172a] shadow-lg">
          <h2 className="text-lg font-semibold mb-3">📦 Product Information</h2>
          {products.length > 0 ? (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            products.map((item: { product: { _id: any; name: any; price: number; }; quantity: any; }, index: Key | null | undefined) => (
              <dl key={index} className="grid grid-cols-2 gap-3 text-sm p-3 border rounded-lg bg-[#1a2238] shadow-md mb-3">
                <dt className="font-semibold">Product ID:</dt>
                <dd className="truncate">{item?.product?._id || "N/A"}</dd>

                <dt className="font-semibold">Product Name:</dt>
                <dd>{item?.product?.name || "N/A"}</dd>

                <dt className="font-semibold">Quantity:</dt>
                <dd>{item?.quantity || "0"}</dd>

                <dt className="font-semibold">Price:</dt>
                <dd>${item?.product?.price?.toFixed(2) || "0.00"}</dd>
              </dl>
            ))
          ) : (
            <p className="text-sm text-gray-300">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyOrder;
