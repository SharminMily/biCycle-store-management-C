
const BycicleCard = () => {
  return (
    <div className="">
        <h1 className="text-4xl text-white text-center pb-4 font-semibold">Featured Bicycles</h1>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 md:m-6 m-10">

      <div className="relative p-2 border border-gray-400 w-full max-w-sm text-white rounded-lg shadow-lg overflow-hidden">
      {/* Image with Discount Badge */}
      <div className="relative">
        <img src="https://i.ibb.co.com/PzMPHhCS/1738259413262-fotor-bg-remover-20250130235025.png" alt="card" className="w-full h-56 object-cover p-2" />
        <div className="absolute top-2 left-2 bg-white text-black font-bold text-lg px-3 py-1 rounded-full">
          $200
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold">This is a bycicle rode time </h3>
        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem incidunt harum facilis error at reiciendis. </p>
        <div className="flex justify-end gap-2 items-center mt-4">
        <button className="px-4 border border-gray-500 py-2 text-[12px] text-white rounded-lg hover:bg-blue-700 bg-gradient-to-r from-[#a144df] to-[#010113] hover:opacity-90 transition duration-300">
           Details
          </button>
          <button className="px-4 border border-gray-500 py-2 text-[12px] text-white rounded-lg hover:bg-blue-700 bg-gradient-to-r from-[#a144df] to-[#010113] hover:opacity-90 transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>

    <div className="relative p-2 border border-gray-400 w-full max-w-sm text-white rounded-lg shadow-lg overflow-hidden">
      {/* Image with Discount Badge */}
      <div className="relative">
        <img src="https://i.ibb.co.com/PzMPHhCS/1738259413262-fotor-bg-remover-20250130235025.png" alt="card" className="w-full h-56 object-cover  p-2" />
        <div className="absolute top-2 left-2 bg-white text-black font-bold text-lg px-3 py-1 rounded-full">
          $200
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold">This is a bycicle rode time </h3>
        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem incidunt harum facilis error at reiciendis. </p>
        <div className="flex justify-end gap-2 items-center mt-4">
        <button className="px-4 border border-gray-500 py-2 text-[12px] text-white rounded-lg hover:bg-blue-700 bg-gradient-to-r from-[#a144df] to-[#010113] hover:opacity-90 transition duration-300">
           Details
          </button>
          <button className="px-4 border border-gray-500 py-2 text-[12px] text-white rounded-lg hover:bg-blue-700 bg-gradient-to-r from-[#a144df] to-[#010113] hover:opacity-90 transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>


    <div className="relative p-2 border border-gray-400 w-full max-w-sm text-white rounded-lg shadow-lg overflow-hidden">
      {/* Image with Discount Badge */}
      <div className="relative">
        <img src="https://i.ibb.co.com/PzMPHhCS/1738259413262-fotor-bg-remover-20250130235025.png" alt="card" className="w-full h-56 object-cover  p-2" />
        <div className="absolute top-2 left-2 bg-white text-black font-bold text-lg px-3 py-1 rounded-full">
          $200
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold">This is a bycicle rode time </h3>
        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem incidunt harum facilis error at reiciendis. </p>
        <div className="flex justify-end gap-2 items-center mt-4">
        <button className="px-4 border border-gray-500 py-2 text-[12px] text-white rounded-lg hover:bg-blue-700 bg-gradient-to-r from-[#a144df] to-[#010113] hover:opacity-90 transition duration-300">
           Details
          </button>
          <button className="px-4 border border-gray-500 py-2 text-[12px] text-white rounded-lg hover:bg-blue-700 bg-gradient-to-r from-[#a144df] to-[#010113] hover:opacity-90 transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>


  
    
 </div>
 </div>
  )
}

export default BycicleCard