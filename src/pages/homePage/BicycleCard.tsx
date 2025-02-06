import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../../redux/features/admin/product/productApi";
import { useNavigate } from "react-router-dom";
import { TProduct } from "../../types/product.type";

const BycicleCard = () => {
  const { data: products, isFetching } = useGetProductsQuery(undefined);
   const [bicycles, setBicycles] = useState<TProduct[]>([]);
  const navigate = useNavigate(); // React Router navigation hook

  useEffect(() => {
    if (products?.data) {
      setBicycles(products.data.slice(0, 6)); // Show only 4 initially
    }
  }, [products]);

  return (
    <div className="flex justify-center items-center">
      <div className="">
      <h1 className="text-4xl text-white text-center pb-4 font-semibold">
        Featured Bicycles
      </h1>

      {isFetching ? (
        <p className="text-center text-white">Loading...</p>
      ) : (
        <>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:m-6 my-10">
            {bicycles.map(({ _id, name, brand, price, quantity, image }) => (
              <div
                key={_id}
                className="relative p-2 border border-gray-400 w-full max-w-sm text-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <img src={image} alt={name} className="w-full h-56 object-cover " />
                  <div className="absolute top-2 left-2 bg-white text-black font-bold text-lg px-3 py-1 rounded-full">
                    ${price}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-bold">{name}</h3>
                  <p className="text-gray-300 text-sm">Brand: {brand}</p>
                  <p className="text-green-500 mt-2">
                    {quantity > 0 ? `Stock: ${quantity}` : "Out of Stock"}
                  </p>

                  <div className="flex justify-end gap-2 items-center mt-4">
                    <button
                      onClick={() => navigate(`/bicycles-details/${_id}`)} // Navigate to details page
                      className="px-4 border border-gray-500 py-2 text-[12px] text-white rounded-lg hover:bg-blue-700 bg-gradient-to-r from-[#a144df] to-[#010113] hover:opacity-90 transition duration-300"
                    >
                      Details
                    </button>
                    <button className="px-4 border border-gray-500 py-2 text-[12px] text-white rounded-lg hover:bg-blue-700 bg-gradient-to-r from-[#a144df] to-[#010113] hover:opacity-90 transition duration-300">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See More Button */}
          <div className="text-center flex justify-end items-center mt-6">
            <button
              onClick={() => navigate("/all-bicycles")}
              className="px-6 py-3 mx-6 my-2 text-black bg-gray-200 hover:bg-gray-300 rounded-lg transition duration-300"
            >
              See More
            </button>
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default BycicleCard;
