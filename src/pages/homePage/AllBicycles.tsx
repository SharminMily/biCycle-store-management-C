import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../redux/features/admin/product/productApi";
import { useNavigate } from "react-router-dom";
import { TProduct } from "../../types/product.type";

const AllBicycles = () => {
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    minPrice: "",
    maxPrice: "",
    available: "",
  });

  const navigate = useNavigate();
  const { data: products, isFetching } = useGetProductsQuery(filters);
  const [bicycles, setBicycles] = useState<TProduct[]>([]);

  useEffect(() => {
    if (products?.data) {
      setBicycles(products.data);
    }
  }, [products]);

  const priceRanges = [
    { label: "All Prices", min: "", max: "" },
    { label: "Under $500", min: "0", max: "500" },
    { label: "$500 – $2,000", min: "500", max: "2000" },
    { label: "$2,000+", min: "2000", max: "999999" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="py-16 md:py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-widest text-gray-900">
          THE COLLECTION
        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-500 font-light max-w-xl mx-auto">
          Curated rides for the modern cyclist
        </p>
      </header>

      {/* Responsive Filter Pills */}
      <div className="max-w-7xl mx-auto px-6 mb-10 md:mb-16">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {["All", "Mountain", "Road", "Electric", "Hybrid"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilters({ ...filters, type: cat === "All" ? "" : cat })}
              className={`px-5 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300
                ${filters.type === (cat === "All" ? "" : cat)
                  ? "bg-gray-900 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}

          {priceRanges.map(({ label, min, max }) => (
            <button
              key={label}
              onClick={() => setFilters({ ...filters, minPrice: min, maxPrice: max })}
              className={`px-5 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300
                ${filters.minPrice === min && filters.maxPrice === max
                  ? "bg-gray-900 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {label}
            </button>
          ))}

          <button
            onClick={() => setFilters({ ...filters, available: filters.available ? "" : "true" })}
            className={`px-5 md:px-8 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300
              ${filters.available ? "bg-emerald-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}
            `}
          >
            In Stock Only
          </button>

          <input
            type="text"
            placeholder="Search..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="px-5 md:px-8 py-2.5 md:py-3 rounded-full bg-gray-100 text-sm md:text-base placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-300 w-full max-w-xs"
          />
        </div>
      </div>

      {/* Compact & Responsive Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16 md:pb-24">
        {isFetching ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-2xl aspect-[4/3] animate-pulse" />
            ))}
          </div>
        ) : bicycles.length === 0 ? (
          <p className="text-center text-lg md:text-xl text-gray-400 py-16 font-light">
            No bicycles match your selection.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {bicycles.map((bike, index) => (
              <div
                key={bike._id}
                className="group cursor-pointer opacity-0 animate-fadeIn"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1.5">
                  {/* Shorter Image */}
                  <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                    <img
                      src={bike.image}
                      alt={bike.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onClick={() => navigate(`/bicycles-details/${bike._id}`)}
                    />
                  </div>

                  {/* Compact Content */}
                  <div className="p-5 md:p-7 space-y-4">
                    <div onClick={() => navigate(`/bicycles-details/${bike._id}`)}>
                      <h3 className="text-xl md:text-2xl font-light text-gray-900">
                        {bike.name}
                      </h3>
                      <p className="text-sm md:text-base text-gray-500 mt-1">
                        {bike.brand} • {bike.type}
                      </p>
                    </div>

                    <div className="flex justify-between items-end">
                      <span className="text-3xl md:text-4xl font-extralight text-gray-900">
                        ${bike.price}
                      </span>

                      <span className={`px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium
                        ${bike.quantity > 0 ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"}
                      `}>
                        {bike.quantity > 0 ? "In Stock" : "Sold Out"}
                      </span>
                    </div>

                    {/* View Details Button */}
                    <button
                      onClick={() => navigate(`/bicycles-details/${bike._id}`)}
                      className="w-full py-3 text-center text-base font-medium text-gray-900 bg-transparent border border-gray-900 rounded-full
                                 hover:bg-gray-900 hover:text-white transition-all duration-400"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

     <style>{`
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.6s ease-out forwards;
  }
`}</style>
    </div>
  );
};

export default AllBicycles;