import React from "react";

const DiscountCard = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Elegant Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-black tracking-tight">
            Special Offers
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Limited-time discounts on selected premium bicycles
          </p>
        </div>

        {/* Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <div className="relative overflow-hidden">
              <img
                src="https://i.ibb.co.com/PzMPHhCS/1738259413262-fotor-bg-remover-20250130235025.png"
                alt="Pink City Rider Bicycle"
                className="w-full h-80 object-contain bg-black transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Clean Discount Badge */}
              <div className="absolute top-4 left-4 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                20% OFF
              </div>

              {/* Subtle Price */}
              <div className="absolute top-4 right-4 bg-green-600 text-white text-2xl font-bold px-5 py-2 rounded-full">
                $120
              </div>
            </div>

            <div className="p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold text-black">
                Pink City Rider
              </h3>
              <p className="text-gray-600">
                Perfect for casual rides with a stylish basket and comfortable seat.
              </p>

              <button className="w-full mt-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-900 transition-colors duration-300">
                Buy Now
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1614788744301-4e5fb9d44e34?w=800&auto=format&fit=crop&q=60"
                alt="Pro Road Racing Bike"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute top-4 left-4 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                20% OFF
              </div>

              <div className="absolute top-4 right-4 bg-green-600 text-white text-2xl font-bold px-5 py-2 rounded-full">
                $120
              </div>
            </div>

            <div className="p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold text-black">
                Pro Road Racing Bike
              </h3>
              <p className="text-gray-600">
                High-performance road bike with lightweight frame and aerodynamic design.
              </p>

              <button className="w-full mt-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-900 transition-colors duration-300">
                Buy Now
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534506020183-7a4a2dc333bc?w=500&auto=format&fit=crop&q=60"
                alt="Classic Green Commuter"
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute top-4 left-4 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full">
                20% OFF
              </div>

              <div className="absolute top-4 right-4 bg-green-600 text-white text-2xl font-bold px-5 py-2 rounded-full">
                $120
              </div>
            </div>

            <div className="p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold text-black">
                Classic Green Commuter
              </h3>
              <p className="text-gray-600">
                Reliable everyday bicycle with front basket. Great for shopping and short trips.
              </p>

              <button className="w-full mt-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-900 transition-colors duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountCard;