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
      <div className="md:grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-10 w-full px-6 py-12 lg:px-20 bg-gray-100">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-8">
          <h1 className="text-green-600 text-4xl md:text-6xl font-black tracking-tight">
            ByCicle Store...
          </h1>

          <p className="text-gray-700 text-sm md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Welcome to ByCicle Store — your one-stop shop for all things cycling!
            Whether you're a casual rider, a dedicated enthusiast, or a competitive athlete,
            we fuel your passion for cycling with the best electric bikes in the market.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-xl shadow-xl transition transform hover:scale-105">
              Shop Now
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-xl shadow-xl transition transform hover:scale-105">
              200% Off Sale!
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-black">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-black">39</h3>
              <p className="text-gray-600 text-sm uppercase tracking-wider">Km/hr Top Speed</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-black">90</h3>
              <p className="text-gray-600 text-sm uppercase tracking-wider">Km Range</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-black">2.5</h3>
              <p className="text-gray-600 text-sm uppercase tracking-wider">Hours Charge</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-black">15</h3>
              <p className="text-gray-600 text-sm uppercase tracking-wider">Kg Weight</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center mt-10 md:mt-0">
          <img
            src={banner}
            alt="Electric Bicycle"
            className="w-full max-w-md lg:max-w-2xl object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-gray-50">
      <Carousel
        value={banners}
        numVisible={1}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        circular
        autoplayInterval={3000}
        itemTemplate={bannerTemplate}
        className="custom-carousel"
        showIndicators={true}
      />
    </div>
  );
};

export default Banner;