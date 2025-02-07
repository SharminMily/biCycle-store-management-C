import { useSearchParams } from "react-router-dom";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("products");  

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <p className="text-gray-700">You're purchasing Bicycle ID: {productId}</p>
      <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
        Proceed to Payment
      </button>
    </div>
  );
};

export default Checkout;
