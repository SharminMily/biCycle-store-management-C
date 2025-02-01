import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" w-full h-full bg-white">
      <div className="my-20">
        <h1 className="text-9xl text-red-600 font-bold text-center">404</h1>
        <p className="font-semibold text-center text-xl mt-4">Not found</p>
        <div className="flex justify-center mt-4">
          <Link to="/" className="text-center">
            <button
              className="font-bold text-center bg-slate-300  px-6 py-2 rounded-full shadow-lg  border border-gray-400 text-white
bg-gradient-to-r from-[#a144df] to-[#010113] hover:opacity-90 transition duration-300"
            >
              Go To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
