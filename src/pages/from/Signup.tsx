import { toast } from "sonner";
import { setUser } from "../../redux/features/auth/authSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { FieldValues, useForm } from "react-hook-form";
import { useSignUpMutation } from "../../redux/features/auth/authApi";
import { TUser } from "../../types/userManagement.type";
import { verifyToken } from "../../utils/verifyToken";

type SignUpFormData = {
  name: string;
  email: string;
  password: string;
  image?: string;
};

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation(); 
  const { register, handleSubmit } = useForm<SignUpFormData>();
  const [signUp] = useSignUpMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Signing up...");
  
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
        image: data.image,
      };
  
      const res = await signUp(userInfo).unwrap();
      console.log("res", res);
  
      toast.success("Signup successful! Please login.", { id: toastId });
  
      // Redirect to login page
      navigate("/login");
  
    } catch (err: any) {
      console.error("Signup Error:", err);
      toast.error("Something went wrong....", { id: toastId });
    }
  };

     // toast.success("Sign up successful!", { id: toastId, duration: 2000 });

     
      // const from = location.state?.from?.pathname || "/dashboard/myHome";
      // console.log("Navigating to:", from);  
      // navigate(from);  
   

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-[#010113] text-white p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-gray-100 font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              {...register("name")}
              className="w-full px-4 py-2 border rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
              {...register("email")}
              className="w-full px-4 py-2 border rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
              {...register("password")}
              className="w-full px-4 py-2 border rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Image Input */}
          <div>
            <label htmlFor="image" className="block text-gray-100 font-medium">
              Image URL
            </label>
            <input
              id="image"
              type="text"
              placeholder="Enter your image link"
              {...register("image")}
              className="w-full px-4 py-2 border rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full border border-gray-500 text-white py-2 hover:bg-blue-700 font-semibold rounded-lg shadow-lg bg-gradient-to-r from-[#a144df] to-[#040431] hover:opacity-90 transition duration-300"
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

export default Signup;

