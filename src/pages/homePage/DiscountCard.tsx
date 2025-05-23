const DiscountCard = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="">
        <h1 className="text-4xl text-white text-center py-12 font-semibold">
          Discount price Bycicle{" "}
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 md:m-4 m-0">
          <div className="relative border border-gray-400 w-full max-w-sm text-white rounded-lg shadow-lg overflow-hidden">
            {/* Image with Discount Badge & Price */}
            <div className="relative">
              <img
                src="https://i.ibb.co.com/PzMPHhCS/1738259413262-fotor-bg-remover-20250130235025.png"
                alt="card"
                className="w-full h-56 object-cover  p-2"
              />
              {/* Discount Badge - Top Left */}
              <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                20% OFF
              </div>
              {/* Price - Top Right */}
              <div className="absolute top-2 right-2 bg-green-600 text-xl text-white px-3 py-0 rounded-full">
                $120
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4">
              <h3 className="text-xl font-bold">This is a bicycle ride time</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem incidunt harum facilis error at reiciendis.
              </p>
              <div className="mt-4">
                <button className="px-4 w-full border border-gray-500 py-2 text-[12px] text-white rounded-lg hover:bg-blue-700 bg-gradient-to-r from-[#a144df] to-[#010113] hover:opacity-90 transition duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="relative border border-gray-400 w-full max-w-sm text-white rounded-lg shadow-lg overflow-hidden">
            {/* Image with Discount Badge & Price */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1614788744301-4e5fb9d44e34?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJ5Y2ljbGV8ZW58MHx8MHx8fDA%3D"
                alt="card"
                className="w-full h-56 object-cover p-2"
              />
              {/* Discount Badge - Top Left */}
              <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                20% OFF
              </div>
              {/* Price - Top Right */}
              <div className="absolute top-2 right-2 bg-green-600 text-xl text-white px-3 py-0 rounded-full">
                $120
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4">
              <h3 className="text-xl font-bold">This is a bicycle ride time</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem incidunt harum facilis error at reiciendis.
              </p>
              <div className="mt-4">
                <button className="px-4 w-full border border-gray-500 py-2 text-[12px] text-white rounded-lg hover:bg-blue-700 bg-gradient-to-r from-[#a144df] to-[#010113] hover:opacity-90 transition duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="relative border border-gray-400 w-full max-w-sm text-white rounded-lg shadow-lg overflow-hidden">
            {/* Image with Discount Badge & Price */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534506020183-7a4a2dc333bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNDI1NDUwfHxlbnwwfHx8fHw%3D"
                alt="card"
                className="w-full h-56 object-cover  p-2"
              />
              {/* Discount Badge - Top Left */}
              <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                20% OFF
              </div>
              {/* Price - Top Right */}
              <div className="absolute top-2 right-2 bg-green-600 text-xl text-white px-3 py-0 rounded-full">
                $120
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4">
              <h3 className="text-xl font-bold">This is a bicycle ride time</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem incidunt harum facilis error at reiciendis.
              </p>
              <div className="mt-4">
                <button className="px-4 w-full border border-gray-500 py-2 text-[12px] text-white rounded-lg hover:bg-blue-700 bg-gradient-to-r from-[#a144df] to-[#010113] hover:opacity-90 transition duration-300">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
