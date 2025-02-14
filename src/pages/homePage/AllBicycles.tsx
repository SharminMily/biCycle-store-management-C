import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../redux/features/admin/product/productApi";
import { useNavigate } from "react-router-dom";
import { TProduct } from "../../types/product.type";

const AllBicycles = () => {
  const [filters, setFilters] = useState({
    search: "",
    brand: "",
    type: "",
    minPrice: "",
    maxPrice: "",
    model: "",
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

  return (
    <div>
      <h1 className="text-4xl text-white text-center pb-4 font-semibold">
        Featured Bicycles
      </h1>

      {/* 🔹 Filter Section */}
      <div className="text-white flex flex-wrap justify-between gap-4">
        {/* 🔍 Search */}
        <input
          type="text"
          placeholder="Search by name, brand, or category"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          className="p-2 border border-gray-300 rounded-md text-white"
        />

        {/* 💰 Price Filter */}
        <select
          value={filters.minPrice + "-" + filters.maxPrice} // Combine values
          onChange={(e) => {
            const [min, max] = e.target.value.split("-");
            setFilters({ ...filters, minPrice: min, maxPrice: max });
          }}
          className="p-2 border border-gray-300 rounded-md text-white bg-black"
        >
          <option value="">Select Price Range</option>
          <option value="0-500">Under $500</option>
          <option value="500-1000">$500 - $5000</option>
          <option value="5000-10000">$5000 - $10,000</option>
        </select>

        {/* 📌 Category */}
        <select
          value={filters.type}
          onChange={(e) =>
            setFilters({
              ...filters,
              type: e.target.value,             
            })
          }
          className="p-2 border border-gray-300 rounded-md text-white"
        >
          <option value="">All Categories</option>
          <option value="Mountain">Mountain</option>
          <option value="Road">Road</option>
          <option value="Electric">Electric</option>
        </select>

        {/* ✅ Availability */}
        <select
          value={filters.available}
          onChange={(e) =>
            setFilters({ ...filters, available: e.target.value })
          }
          className="p-2 border border-gray-300 rounded-md text-white"
        >
          <option value="">All</option>
          <option value="true">In Stock</option>
          <option value="false">Out of Stock</option>
        </select>
      </div>

      {/* ⏳ Loading */}
      {isFetching ? (
        <p className="text-center text-white">Loading...</p>
      ) : (
        <div className="flex justify-center items-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:m-6 m-10">
            {bicycles.length === 0 ? (
              <p className="text-center text-white">No products found.</p>
            ) : (
              bicycles.map(
                ({ _id, name, brand, price, quantity, image, type }) => (
                  <div
                    key={_id}
                    className="relative p-2 border border-gray-400 w-full max-w-sm text-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={image}
                        alt={name}
                        className="w-full h-56 object-cover p-2"
                      />
                      <div className="absolute top-2 left-2 bg-white text-black font-bold text-lg px-3 py-1 rounded-full">
                        ${price}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold">{name}</h3>
                      <p className="text-gray-300 text-sm">Brand: {brand}</p>
                      <p className="text-gray-300 text-sm">Category: {type}</p>
                      <p className="text-green-500 mt-2">
                        {quantity > 0 ? `Stock: ${quantity}` : "Out of Stock"}
                      </p>
                      <button
                        onClick={() => navigate(`/bicycles-details/${_id}`)}
                        className="px-4 border border-gray-500 py-2 text-[12px] text-white rounded-lg hover:bg-blue-700 bg-gradient-to-r from-[#a144df] to-[#010113] hover:opacity-90 transition duration-300"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                )
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBicycles;
