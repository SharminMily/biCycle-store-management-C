/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

const Login = () => {
const navigate = useNavigate();
const location = useLocation();
const dispatch = useAppDispatch();
const { register, handleSubmit } = useForm();
const [login] = useLoginMutation();

const onSubmit = async (data: FieldValues) => {
  const toastId = toast.loading("Logging in...");

  try {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    const res = await login(userInfo).unwrap();
    console.log("Login response:", res); 

    // Flexible token extraction — signup-
    const token = res?.token || res?.data?.accessToken || res?.accessToken;
    
    if (!token) {
      throw new Error("No token received from server");
    }

    // User extract করার চেষ্টা
    let user: TUser;
    if (res?.data?.user) {
      user = res.data.user;
    } else if (res?.user) {
      user = res.user;
    } else {
      // যদি user object না থাকে তাহলে token থেকে decode করো
      user = verifyToken(token) as TUser;
    }

    dispatch(setUser({ user, token }));

    // Optional: localStorage-এও রাখতে পারো (signup-এ যেমন করেছ)
    localStorage.setItem("token", token);

    toast.success("Login successful!", { id: toastId, duration: 2000 });

    const from = (location.state as { from?: { pathname: string } })?.from?.pathname || "/dashboard/myHome";
    navigate(from, { replace: true });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("Login error:", err);
    toast.error(err?.data?.message || "Invalid email or password", { id: toastId });
  }
};

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Soft blurred accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-200/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="w-full max-w-4xl relative z-10">
        {/* Back to Home */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-black/70 hover:text-red-600 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-lg">Back to Home</span>
        </button>

        {/* Unique Split Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Red Accent Panel */}
          <div className="bg-gradient-to-b from-red-600 to-red-700 md:w-1/3 p-12 flex flex-col justify-between text-white">
            <div />
            <h2 className="text-5xl font-thin tracking-widest text-center md:text-left">
              Welcome<br />Back
            </h2>
            <div className="h-16 w-16 bg-white/20 rounded-full mt-8 self-center md:self-start" />
          </div>

          {/* Form Area */}
          <div className="md:w-2/3 p-12 lg:p-16">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 mt-8 md:mt-0">
              {/* Email */}
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder=" "
                  {...register("email", { required: "Email is required" })}
                  className="peer w-full px-0 py-4 bg-transparent border-b-2 border-black/20 text-black text-xl focus:outline-none focus:border-red-600 transition-all"
                />
                <label className="absolute left-0 top-4 text-black/60 pointer-events-none transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl peer-focus:-top-4 peer-focus:text-sm peer-focus:text-red-600 peer-valid:-top-4 peer-valid:text-sm">
                  Email Address
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 bg-green-600 w-full scale-x-0 peer-focus:scale-x-100 transition-transform" />
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  placeholder=" "
                  {...register("password", { required: "Password is required" })}
                  className="peer w-full px-0 py-4 bg-transparent border-b-2 border-black/20 text-black text-xl focus:outline-none focus:border-red-600 transition-all"
                />
                <label className="absolute left-0 top-4 text-black/60 pointer-events-none transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl peer-focus:-top-4 peer-focus:text-sm peer-focus:text-red-600 peer-valid:-top-4 peer-valid:text-sm">
                  Password
                </label>
                <div className="absolute bottom-0 left-0 h-0.5 bg-green-600 w-full scale-x-0 peer-focus:scale-x-100 transition-transform" />
              </div>

              {/* Smaller Elegant Button */}
              <div className="flex justify-center mt-12">
                <button
                  type="submit"
                  className="px-12 py-3 font-medium text-lg text-white rounded-full bg-red-600 shadow-lg hover:bg-gradient-to-r hover:from-red-600 hover:to-green-600 hover:shadow-xl transition-all duration-500"
                >
                  Login
                </button>
              </div>
            </form>

            <p className="text-center text-black/70 mt-12 text-lg">
              Don't have an account?{" "}
              <a href="/signUp" className="text-red-600 font-medium hover:text-green-600 hover:underline transition-colors">
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;