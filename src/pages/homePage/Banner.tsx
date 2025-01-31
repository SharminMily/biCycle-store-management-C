import { Carousel } from "primereact/carousel";

const banners = [
  "https://i.ibb.co.com/4ZmNst0h/1738248885539-fotor-bg-remover-202501302158.png",
  "https://i.ibb.co.com/PzMPHhCS/1738259413262-fotor-bg-remover-20250130235025.png",
  "https://i.ibb.co.com/1fpJLPw8/1738259073837-fotor-bg-remover-20250130234539.png",
];

const Banner = () => {
  const responsiveOptions = [
    { breakpoint: "1400px", numVisible: 1, numScroll: 1 },
    { breakpoint: "1199px", numVisible: 1, numScroll: 1 },
    { breakpoint: "767px", numVisible: 1, numScroll: 1 },
    { breakpoint: "575px", numVisible: 1, numScroll: 1 },
  ];

  const bannerTemplate = (banner: string) => {
    return (
      <div className=" md:grid grid-cols-2 justify-center items-center gap-4 w-full lg:p-10 p-4">
        <div className="text-center md:text-start text-white md:pb-0 pb-10">
          <h1 className="text-white md:text-5xl  md:font-bold text-3xl pb-2">
            ByCicle store...
          </h1>
          <span className="md:text-sm text-[10px] pb-4">
            Welcome to ByCicle store, your one-stop shop for all things cycling!
            Whether you're a casual rider, a dedicated enthusiast, or a
            competitive athlete, passion for cycling. <br /> Let me know if
            you'd like to tailor this further!
          </span>
          <br />
          <button
            className="mt-5 border border-gray-400 md:px-4 md:py-2 px-2 text-white font-semibold rounded-lg shadow-lg 
bg-gradient-to-r from-[#a144df] to-[#010113] hover:opacity-90 transition duration-300"
          >
            Shop Now
          </button>
          <div className="flex justify-center md:justify-start space-x-6 align-middle text-white mt-8">
            <div>
              <h1 className="font-bold md:text-2xl">
                39Km<span className="font-medium text-[10px]">/hr</span>
              </h1>
              <p className="text-[10px]">Top Speed</p>
            </div>
            <div>
              <h1 className="font-bold md:text-2xl">90Km </h1>
              <p className="text-[10px]">Battery Range</p>
            </div>
            <div>
              <h1 className="font-bold md:text-2xl">2.5h </h1>
              <p className="text-[10px]">Charging Time</p>
            </div>
            <div>
              <h1 className="font-bold md:text-2xl">15Kg </h1>
              <p className="text-[10px]">weight</p>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <img
            src={banner}
            alt="Banner"
            className="w-full max-w-full sm:h-[300px] md:h-[400px] object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={banners}
        numVisible={1}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        circular
        autoplayInterval={3000} // Auto change every 3 seconds
        itemTemplate={bannerTemplate}
      />
    </div>
  );
};

export default Banner;
