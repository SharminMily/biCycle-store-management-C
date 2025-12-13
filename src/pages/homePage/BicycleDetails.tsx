import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/features/admin/product/productApi";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { RootState } from "../../redux/store";
import { ShoppingBag } from "lucide-react"; // Optional: npm install lucide-react

const BicycleDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const { data: products, isFetching, error } = useGetProductsQuery(undefined);

  if (isFetching) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-black text-2xl font-light tracking-widest animate-pulse">LOADING EXPERIENCE...</div>
      </div>
    );
  }

  if (error || !products?.data) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-red-600 text-3xl font-black tracking-widest">ERROR // SYSTEM FAILURE</div>
      </div>
    );
  }

  const bicycle = products.data.find((bike) => bike._id === id);
  if (!bicycle) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-black text-4xl font-black tracking-widest">404 // NOT FOUND</div>
      </div>
    );
  }

  const handleBuyNow = () => {
    dispatch(
      addToCart({
        product: bicycle._id,
        name: bicycle.name,
        brand: bicycle.brand,
        model: bicycle.model || "",
        price: bicycle.price,
        category: bicycle.type,
        description: bicycle.description,
        image: bicycle.image,
        quantity: 1,
        stock: bicycle.quantity,
        inStock: bicycle.inStock || bicycle.quantity > 0,
        id: "",
      })
    );
    navigate("/checkout");
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden text-black">
      {/* Digital Fashion Ambient Glow - Light Version */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-400 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-red-300 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image - Couture Spotlight */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-300/30 to-transparent rounded-3xl blur-3xl group-hover:blur-xl transition-all duration-700" />
            <img
              src={bicycle.image}
              alt={bicycle.name}
              className="relative w-full object-contain rounded-3xl shadow-2xl transition-all duration-1000 group-hover:scale-105 group-hover:rotate-2"
              loading="lazy"
            />
            {/* Floating Status Orb */}
            <div className="absolute top-8 right-8">
              <div className={`w-6 h-6 rounded-full animate-ping ${bicycle.quantity > 0 ? "bg-black" : "bg-red-600"}`} />
              <div className={`absolute top-0 left-0 w-6 h-6 rounded-full ${bicycle.quantity > 0 ? "bg-black" : "bg-red-600"}`} />
            </div>
          </div>

          {/* Details - High Fashion Editorial */}
          <div className="space-y-12">
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.05em] text-black">
                {bicycle.name.toUpperCase()}
              </h1>
              <p className="mt-4 text-2xl font-light tracking-widest text-gray-600">
                {bicycle.brand} • {bicycle.type}
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-gray-700 font-light leading-relaxed max-w-2xl">
                {bicycle.description}
              </p>

              {/* Price - Luxury Tag */}
              <div className="flex items-center gap-6">
                <div className="bg-black text-white font-black text-5xl px-10 py-4 rounded-full shadow-2xl border-4 border-black">
                  ${bicycle.price}
                </div>
                <div className={`text-2xl font-light ${bicycle.quantity > 0 ? "text-gray-600" : "text-red-600"}`}>
                  {bicycle.quantity > 0 ? `LIMITED STOCK • ${bicycle.quantity} LEFT` : "SOLD OUT"}
                </div>
              </div>
            </div>

            {/* Acquire Button - Exclusive Drop Style */}
            <button
              onClick={handleBuyNow}
              disabled={bicycle.quantity === 0}
              className={`group relative w-full md:w-auto inline-flex items-center justify-center gap-6 py-6 px-16 bg-black text-white font-black text-2xl uppercase tracking-widest rounded-full overflow-hidden shadow-2xl transition-all duration-700
                ${bicycle.quantity === 0 ? "bg-gray-400 cursor-not-allowed opacity-60" : "hover:shadow-black/30 hover:scale-105"}`}
            >
              <ShoppingBag className="w-8 h-8" />
              <span className="relative z-10">
                {bicycle.quantity > 0 ? "Acquire Now" : "Unavailable"}
              </span>
              <span className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <span className="relative z-10 group-hover:translate-x-4 transition-transform duration-500">→</span>
            </button>

            {/* Subtle Back Link */}
            <button
              onClick={() => navigate(-1)}
              className="text-gray-500 hover:text-black transition-colors duration-300 uppercase tracking-widest text-sm"
            >
              ← Return to Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BicycleDetails;