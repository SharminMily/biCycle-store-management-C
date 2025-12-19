import { Carousel } from "primereact/carousel";
import { Link } from "react-router-dom";

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
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Animated Background Orbs - Digital Fashion Depth */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 -left-40 w-96 h-96 bg-red-500/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 -right-40 w-96 h-96 bg-green-500/10 rounded-full filter blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-black/5 rounded-full filter blur-3xl animate-ping slow" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* Left: High-Fashion Editorial Content */}
          <div className="space-y-12 text-center lg:text-left">
            {/* Headline with Digital Glitch-style Animation */}
            <div className="overflow-hidden">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-black leading-none">
                <span className="inline-block animate-fade-up">BICYCLE</span>
                <br />
                <span className="inline-block text-red-600 animate-fade-up animation-delay-200">STUDIO</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-gray-700 font-light tracking-wide max-w-lg mx-auto lg:mx-0">
              Limited-edition urban machines. Designed for the bold. Engineered for the future.
            </p>

            {/* Luxury CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
             <Link to="/about">
        <button className="group relative px-12 py-5 bg-black text-white font-bold text-lg uppercase tracking-widest rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-black/30">
          <span className="relative z-10">THE VISION</span>
          <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </button>
      </Link>
     
      <Link to="/all-bicycles">
       <button className="px-12 py-5 border-2 border-black text-black font-bold text-lg uppercase tracking-widest rounded-full hover:bg-black hover:text-white transition-all duration-500">
          <span className="relative z-10">COLLECTION</span>
          <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </button>
      
      </Link>
            </div>

            {/* Minimal Stats - Editorial Style */}
            <div className="grid grid-cols-4 gap-8 pt-12 border-t border-gray-300">
              {[
                { value: "39", label: "Top Speed" },
                { value: "90", label: "Range" },
                { value: "2.5", label: "Charge" },
                { value: "15", label: "Weight" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <h3 className="text-4xl font-black text-black">{stat.value}</h3>
                  <p className="text-xs uppercase tracking-widest text-gray-600 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dramatic Floating Product */}
          <div className="relative flex justify-center items-center">
            <div className="relative group">
              {/* Floating Shadow */}
              <div className="absolute inset-0 bg-black/20 rounded-full blur-3xl scale-75 group-hover:scale-90 transition-transform duration-1000" />

              <img
                src={banner}
                alt="Exclusive Bicycle"
                className="relative z-10 w-full max-w-xl lg:max-w-3xl object-contain drop-shadow-2xl 
                           transition-all duration-1000 
                           group-hover:scale-110 group-hover:-rotate-3"
                loading="lazy"
              />

              {/* Subtle Red/Green Accent Rings */}
              <div className="absolute -inset-10 border-4 border-red-500/20 rounded-full animate-ping" />
              <div className="absolute -inset-20 border-4 border-green-500/20 rounded-full animate-ping delay-500" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <Carousel
        value={banners}
        numVisible={1}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        circular
        autoplayInterval={5000}
        itemTemplate={bannerTemplate}
        showIndicators={false}
        showNavigators={false}
        className="overflow-hidden"
      />
    </div>
  );
};

export default Banner;