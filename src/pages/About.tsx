import React from "react";

const About = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Subtle Digital Fashion Depth */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-black rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-10 w-80 h-80 bg-red-600/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Hero Heading */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.05em] text-transparent bg-clip-text bg-gradient-to-r from-black to-red-600">
            THE ~ VISION
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 font-light italic max-w-3xl mx-auto">
            Where cycling becomes couture — redefining movement with timeless elegance and cutting-edge design.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">
              Our Legacy
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              Established in 2025, we didn't just open a store — we ignited a movement. 
              From the first pedal stroke, our mission has been to fuse high-performance engineering with uncompromising style.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              Today, our curated collection spans road masterpieces, urban icons, mountain conquerors, and electric visions — each piece selected to elevate your ride into an expression of personal style.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-gray-100 border-2 border-dashed border-black/20 rounded-3xl w-full h-96 flex items-center justify-center">
              {/* Placeholder for a signature image or video */}
              <p className="text-gray-400 text-2xl font-light italic">Signature Ride</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us - Editorial Grid */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-center text-black tracking-tight mb-16">
            Why We Lead
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: "Curated Excellence", desc: "Only the finest frames make the cut" },
              { title: "Unrivaled Craft", desc: "Precision engineering meets aesthetic mastery" },
              { title: "Sustainable Edge", desc: "Eco-conscious without compromise" },
              { title: "Elite Service", desc: "Personalized guidance for every rider" },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white border border-gray-200 rounded-3xl p-8 text-center transition-all duration-500 hover:shadow-2xl hover:border-black hover:-translate-y-2"
              >
                <div className="absolute inset-0 rounded-3xl bg-black opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10" />
                <h3 className="text-2xl font-black text-black mb-4">{item.title}</h3>
                <p className="text-gray-600 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-8">
            Our Manifesto
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-light italic max-w-4xl mx-auto leading-relaxed">
            We don't sell bicycles. We craft experiences. 
            Every curve, every component, every ride is designed to inspire freedom, ignite passion, and transform ordinary journeys into extraordinary statements.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-10">
            Begin Your Journey
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Ready to experience cycling elevated to art? Our experts await to guide you toward your perfect ride.
          </p>
          <button className="relative inline-flex items-center gap-4 py-5 px-12 bg-black text-white font-extrabold text-xl rounded-full overflow-hidden group">
            <span className="relative z-10">Connect With Us</span>
            <span className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;