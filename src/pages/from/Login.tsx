/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser, TUser } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm();

  const [login ] = useLoginMutation();
  const onSubmit = async(data: FieldValues) => {
   const toastId = toast.loading(" loging....")
    // console.log(data)

 try {
  const userInfo = {
    email: data.email,
    password: data.password,
       };
const res =  await  login(userInfo).unwrap();
const user = verifyToken(res.data.accessToken) as TUser
console.log( user);

dispatch(setUser({
  user: {}, token: res.data.accessToken }))
  toast.success(" Success....", {id: toastId, duration: 2000})
  if (user.role === "admin") {
    navigate("/dashboard/adminHome");
  } else {
    navigate("/dashboard/userHome");
  }
}
  catch (err) {
  toast.error(" Something went Wrong....", {id: toastId, duration: 2000})
 }
 }


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-[#010113] text-white p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              //value={email}
              //onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-100 font-medium"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              // value={password}
              //onChange={(e) => setPassword(e.target.value)}
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
            Login
          </button>
        </form>

        {/* Extra Links */}
        <p className="text-center text-gray-400 mt-4">
          Don't have an account?{" "}
          <a href="/signUp" className="text-fuchsia-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
