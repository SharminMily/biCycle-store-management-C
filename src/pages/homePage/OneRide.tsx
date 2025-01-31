
const OneRide = () => {
  return (
    <div className=" md:grid grid-cols-2 py-6 lg:px-24 md:px-10">
        <div className="flex justify-center items-center">
            <img src="https://i.ibb.co.com/Fq6zBBKk/bicyleimage-removebg-preview.png" alt="" />
        </div>
       <div className="flex justify-start items-center">
       <div className="text-white md:text-start text-center md:p-1 p-4 ">
            <h1 className="md:text-4xl text-2xl pb-1 font-semibold">Explore the Road, Embrace the Freedom,</h1>
            <span className="font-semibold "> and Create Unforgettable Memories</span>
            <p className="text-[12px] pt-4">Experience the thrill of the open road with just one ride! Feel the wind, embrace the speed, and let the road take you where you belong. One ride is all it takes to create a lifetime of memories. 🚴✨</p>
           
          <button
            className="mt-5 border border-gray-400 md:px-4 md:py-2 px-2 text-white font-semibold rounded-lg shadow-lg 
bg-gradient-to-r from-[#a144df] to-[#010113] hover:opacity-90 transition duration-300"
          >
            Shop Now
          </button>

        </div>
       </div>
    </div>
  )
}

export default OneRide