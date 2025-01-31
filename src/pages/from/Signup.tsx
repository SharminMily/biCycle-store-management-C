import { useState } from "react";

const  Signup = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName("");
    setPassword("");
    setEmail("");
    setImage("");
    console.log("name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("image:", image);

  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <div className="bg-[#010113] text-white p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold text-center mb-6"> Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

              {/* Email Input */}
              <div>
            <label htmlFor="name" className="block text-gray-100 font-medium">
              Name
            </label>
            <input
              id="name"
              type="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-100 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-100 font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {/* Image Input */}
          <div>
            <label htmlFor="image" className="block text-gray-100 font-medium">
              image
            </label>
            <input
              id="image"
              type="text"
              placeholder="Enter your image link"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full  border border-gray-500 text-white py-2  hover:bg-blue-700 t font-semibold rounded-lg shadow-lg 
bg-gradient-to-r from-[#a144df] to-[#040431] hover:opacity-90 transition duration-300"
          >
           Sign Up
          </button>
        </form>

        {/* Extra Links */}
        <p className="text-center text-gray-400 mt-4">
          Have an account?{" "}
          <a href="/login" className="text-fuchsia-400 hover:underline">
           Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default  Signup;

