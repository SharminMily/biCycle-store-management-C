import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../redux/features/admin/product/productApi";
import { useNavigate } from "react-router-dom";
import { TProduct } from "../../types/product.type";
import { Zap, ShoppingBag } from "lucide-react";

const BicycleCard = () => {
  const { data: products, isFetching } = useGetProductsQuery(undefined);
  const [bicycles, setBicycles] = useState<TProduct[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (products?.data) {
      setBicycles(products.data.slice(0, 6));
    }
  }, [products]);

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Pure Monochrome Subtle Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-gray-200 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-gray-300 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Clean Monochrome Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-black">
            FUTURE RIDES
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 font-light tracking-wide">
            Precision engineered. Timeless design.
          </p>
          <div className="flex justify-center mt-6">
            <Zap className="w-12 h-12 text-black animate-bounce" />
          </div>
        </div>

        {isFetching ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden animate-pulse"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="h-80 bg-gray-100" />
                <div className="p-8 space-y-6">
                  <div className="h-8 bg-gray-200 rounded w-4/5"></div>
                  <div className="h-5 bg-gray-200 rounded w-1/2"></div>
                  <div className="flex gap-4">
                    <div className="h-12 flex-1 bg-gray-200 rounded-2xl"></div>
                    <div className="h-12 flex-1 bg-gray-200 rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {bicycles.map(({ _id, name, brand, price, quantity, image }, index) => (
                <div
                  key={_id}
                  className="group relative bg-white border border-gray-300 rounded-3xl overflow-hidden 
                             shadow-xl transition-all duration-700 hover:shadow-2xl hover:border-black hover:scale-105"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Subtle Shadow Glow on Hover */}
                  <div className="absolute inset-0 rounded-3xl bg-black opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-700 -z-10" />

                  {/* Image with Elegant Zoom */}
                  <div className="relative overflow-hidden h-80">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />

                    {/* Minimal Price Tag */}
                    <div className="absolute top-6 left-6 bg-white border-2 border-black text-black font-bold text-2xl px-6 py-3 rounded-2xl shadow-lg">
                      ${price}
                    </div>

                    {/* Stock Status Indicator */}
                    <div className="absolute top-6 right-6">
                      <div
                        className={`w-4 h-4 rounded-full animate-ping absolute ${
                          quantity > 0 ? "bg-black" : "bg-gray-500"
                        }`}
                      />
                      <div
                        className={`w-4 h-4 rounded-full ${
                          quantity > 0 ? "bg-black" : "bg-gray-500"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-6 text-center">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight group-hover:text-gray-800 transition-colors duration-500">
                      {name}
                    </h3>
                    <p className="text-gray-600 text-sm uppercase tracking-widest font-medium">
                      {brand} • Premium Series
                    </p>

                    {/* Monochrome Buttons */}
                    <div className="flex gap-4 pt-4">
                      <button
                        onClick={() => navigate(`/bicycles-details/${_id}`)}
                        className="flex-1 py-4 px-6 bg-white border-2 border-gray-400 text-black font-bold rounded-full 
                                   hover:bg-black hover:text-white hover:border-black hover:shadow-lg 
                                   transition-all duration-500 uppercase tracking-wider"
                      >
                        Explore
                      </button>
                      <button
                        disabled={quantity === 0}
                        className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 font-bold rounded-full uppercase tracking-wider transition-all duration-500
                          ${
                            quantity > 0
                              ? "bg-black text-white hover:bg-gray-900 hover:shadow-lg"
                              : "bg-gray-200 text-gray-500 cursor-not-allowed border border-gray-400"
                          }`}
                      >
                        <ShoppingBag className="w-5 h-5" />
                        {quantity > 0 ? "Acquire" : "Sold Out"}
                      </button>
                    </div>
                  </div>

                  {/* Bottom Accent Line - Black */}
                  <div className="h-1 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-x-0 group-hover:scale-x-100 origin-left" />
                </div>
              ))}
            </div>

            {/* Clean CTA Button */}
            <div className="text-center mt-20">
              <button
                onClick={() => navigate("/all-bicycles")}
                className="group relative inline-flex items-center gap-4 px-12 py-6 text-xl font-black text-white uppercase tracking-widest
                           bg-black rounded-full overflow-hidden shadow-2xl
                           hover:bg-gray-900 hover:shadow-black/50 transform hover:scale-110 transition-all duration-500"
              >
                <span className="relative z-10">Enter The Collection</span>
                <span className="relative z-10 group-hover:translate-x-2 transition-transform">→</span>
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default BicycleCard;