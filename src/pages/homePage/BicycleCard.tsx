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
    <section className="relative py-12 px-4 sm:py-16 lg:py-20 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
        <div className="absolute top-20 left-20 w-80 h-80 md:w-96 md:h-96 bg-gray-200 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 md:w-80 md:h-80 bg-gray-300 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-black">
            FUTURE RIDES
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 font-light tracking-wide">
            Precision engineered. Timeless design.
          </p>
          <div className="flex justify-center mt-6">
            <Zap className="w-10 h-10 md:w-12 md:h-12 text-black animate-bounce" />
          </div>
        </div>

        {isFetching ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden animate-pulse">
                <div className="h-64 md:h-80 bg-gray-100" />
                <div className="p-6 md:p-8 space-y-4">
                  <div className="h-8 bg-gray-200 rounded w-4/5"></div>
                  <div className="h-5 bg-gray-200 rounded w-1/2"></div>
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="h-12 flex-1 bg-gray-200 rounded-2xl"></div>
                    <div className="h-12 flex-1 bg-gray-200 rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Grid – ল্যাপটপে 3 কলাম, কিন্তু gap + padding বাড়ানো */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              {bicycles.map(({ _id, name, brand, price, quantity, image }, index) => (
                <div
                  key={_id}
                  className="group relative bg-white border border-gray-300 rounded-3xl overflow-hidden 
                             shadow-xl transition-all duration-700 hover:shadow-2xl hover:border-black hover:scale-105"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute inset-0 rounded-3xl bg-black opacity-0 group-hover:opacity-10 blur-xl transition-opacity -z-10" />

                  {/* Image – ল্যাপটপে বড় */}
                  <div className="relative overflow-hidden h-64 md:h-80 lg:h-96">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />

                    {/* Price Tag */}
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white border-2 border-black text-black font-bold text-xl md:text-2xl lg:text-3xl px-5 md:px-6 py-2 md:py-3 rounded-2xl shadow-lg">
                      ${price}
                    </div>

                    {/* Stock Indicator */}
                    <div className="absolute top-4 right-4 md:top-6 md:right-6">
                      <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full animate-ping absolute ${quantity > 0 ? "bg-black" : "bg-gray-500"}`} />
                      <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full ${quantity > 0 ? "bg-black" : "bg-gray-500"}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 lg:p-10 space-y-4 md:space-y-6 text-center">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-black tracking-tight line-clamp-2">
                      {name}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg text-gray-600 uppercase tracking-widest font-medium">
                      {brand} • Premium Series
                    </p>

                   
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 pt-4">
  <button
    onClick={() => navigate(`/bicycles-details/${_id}`)}
    className="w-full py-4 px-6 bg-white border-2 border-gray-400 text-black font-bold rounded-full 
               hover:bg-black hover:text-white hover:border-black hover:shadow-lg 
               transition-all duration-500 uppercase tracking-wider text-base lg:text-lg"
  >
    Explore
  </button>
  <button
    disabled={quantity === 0}
    className={`w-full flex items-center justify-center gap-3 py-4 px-6 font-bold rounded-full uppercase tracking-wider text-base lg:text-lg transition-all duration-500
      ${
        quantity > 0
          ? "bg-black text-white hover:bg-gray-900 hover:shadow-lg"
          : "bg-gray-200 text-gray-500 cursor-not-allowed border border-gray-400"
      }`}
  >
    <ShoppingBag className="w-5 h-5 lg:w-6 lg:h-6" />
    {quantity > 0 ? "Acquire" : "Sold Out"}
  </button>
</div>

                  </div>

                  {/* Bottom Line */}
                  <div className="h-1 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-x-0 group-hover:scale-x-100 origin-left" />
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-16 lg:mt-24">
              <button
                onClick={() => navigate("/all-bicycles")}
                className="group relative inline-flex items-center gap-4 px-10 md:px-12 lg:px-14 py-5 md:py-6 text-lg md:text-xl lg:text-2xl font-black text-white uppercase tracking-widest
                           bg-black rounded-full overflow-hidden shadow-2xl
                           hover:bg-gray-900 hover:shadow-black/50 transform hover:scale-105 transition-all duration-500"
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