import { useParams, useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/features/admin/product/productApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { RootState } from "../../redux/store";

const BicycleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);;// ✅ Move useSelector here
  
  const { data: products, isFetching, error } = useGetProductsQuery(undefined);

  if (isFetching) {
    return <p className="text-center text-white">Loading...</p>;
  }
  if (error) {
    return <p className="text-center text-red-500">Failed to load data.</p>;
  }
  if (!products?.data || products.data.length === 0) {
    return <p className="text-center text-red-500">No bicycles available!</p>;
  }

  const bicycle = products.data.find((bike) => bike._id === id);
  if (!bicycle) {
    return <p className="text-center text-white">Bicycle not found!</p>;
  }

  const handleBuyNow = () => {
    console.log("Adding to cart:", bicycle); 
    dispatch(addToCart({
      product: bicycle._id,
      name: bicycle.name,
      brand: bicycle.brand,
      model: bicycle.model,
      price: bicycle.price,
      category: bicycle.type,
      description: bicycle.description,
      image: bicycle.image,
      quantity: 1,
      stock: bicycle.quantity,
      inStock: bicycle.inStock,
      id: ""
    }));

    console.log("Cart after adding:", cartItems); // ✅ Use the cart state from useSelector
    navigate("/checkout");
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-10">
      <div className="max-w-4xl w-full bg-gray-800 text-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center">
            <img src={bicycle.image} alt={bicycle.name} className="w-full h-64 object-cover rounded-lg" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold">{bicycle.name}</h2>
            <p className="text-gray-200 text-xl mt-2">Brand: {bicycle.brand}</p>
            <p className="text-gray-200 text-lg mt-2">Category: {bicycle.type}</p>
            <p className="text-gray-400 mt-2">{bicycle.description}</p>
            <p className="text-gray-300 mt-1">
              Price: <span className="font-bold">${bicycle.price}</span>
            </p>
            <p className={`mt-2 ${bicycle.quantity > 0 ? "text-green-400" : "text-red-400"}`}>
              {bicycle.quantity > 0 ? `Stock: ${bicycle.quantity}` : "Out of Stock"}
            </p>
            <button
              onClick={handleBuyNow}
              className="mt-4 px-2 w-full border border-gray-500 py-3 text-[12px] text-white rounded-lg hover:bg-blue-700 bg-gradient-to-r from-[#a144df] to-[#010113] hover:opacity-90 transition duration-300"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BicycleDetails;
