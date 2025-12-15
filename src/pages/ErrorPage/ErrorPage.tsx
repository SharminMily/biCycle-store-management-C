import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-red-500 to--700 flex items-center justify-center p-6 overflow-hidden relative">
      {/* Optional subtle background pattern */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative z-10 text-center max-w-2xl">
        {/* Astronaut Illustration (simple SVG) */}
        <div className="mb-8 flex justify-center">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="drop-shadow-2xl animate-float"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="70" r="30" fill="white" />
            <rect x="70" y="100" width="60" height="70" rx="20" fill="white" />
            <circle cx="85" cy="60" r="8" fill="#1e293b" />
            <circle cx="115" cy="60" r="8" fill="#1e293b" />
            <rect x="80" y="80" width="40" height="10" rx="5" fill="#fbbf24" />
            <circle cx="60" cy="120" r="15" fill="#e2e8f0" />
            <circle cx="140" cy="120" r="15" fill="#e2e8f0" />
          </svg>
        </div>

        <h1 className="text-9xl font-extrabold text-white drop-shadow-lg tracking-tight animate-pulse">
          404
        </h1>
        <p className="text-3xl md:text-4xl font-semibold text-white mt-6">
          Oops! Page Not Found
        </p>
        <p className="text-lg text-white/90 mt-4 max-w-md mx-auto">
          Looks like you've ventured into uncharted territory. Don't worry — let's get you back home.
        </p>

        <div className="mt-10">
          <Link to="/">
            <button className="px-8 py-4 bg-white text-indigo-700 font-bold text-lg rounded-full shadow-2xl hover:shadow-indigo-500/50 transform hover:scale-105 transition-all duration-300 hover:bg-indigo-50">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>

      {/* Optional floating stars for extra flair */}
      {/* <div className="absolute top-20 left-10 text-white text-4xl animate-pulse">✦</div> */}
      <div className="absolute top-20 left-10 text-white text-4xl animate-pulse">★★</div>
      <div className="absolute bottom-32 right-20 text-white text-3xl animate-pulse delay-300">★★</div>
      <div className="absolute top-40 right-10 text-white text-5xl animate-pulse delay-500">★★</div>
      <div className="absolute bottom-32 left-10 text-white text-5xl animate-pulse delay-500">★★</div>

    </div>
  );
};

export default ErrorPage;