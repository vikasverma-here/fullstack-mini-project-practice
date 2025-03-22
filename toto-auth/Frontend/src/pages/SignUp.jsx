import { useForm } from "react-hook-form";
import axios from "axios"; 
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const SignUpForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    console.log("User Signed Up:", data);
    try{
      const response = await axios.post("http://localhost:4000/api/auth/signUp", data);
      console.log("response comming from here",response)
      toast(response.data.message)
      navigate("/login")
    }
    catch(error){
      console.log("error",error.response.data.message)
      toast(error.response.data.message)
    }
    
    
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Username Field */}
        <div>
          <label className="block font-medium">Username</label>
          <input
            type="text"
            {...register("userName", {
              required: "Username is required",
              minLength: { value: 3, message: "Username must be at least 3 characters" },
            })}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          {errors.userName && <p className="text-red-500 text-sm">{errors.userName.message}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label className="block font-medium">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Password must be at least 8 characters" },
              validate: (value) =>
                /[A-Z]/.test(value) ||
                "Password must include at least 1 uppercase letter",
              validate: (value) =>
                /[a-z]/.test(value) ||
                "Password must include at least 1 lowercase letter",
              validate: (value) =>
                /\d/.test(value) || "Password must include at least 1 number",
              validate: (value) =>
                /[\W_]/.test(value) || "Password must include at least 1 special character",
            })}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {/* Age Field */}
        <div>
          <label className="block font-medium">Age</label>
          <input
            type="number"
            {...register("age", {
              required: "Age is required",
              min: { value: 10, message: "Age must be at least 10 years" },
              max: { value: 120, message: "Age cannot be more than 120 years" },
            })}
            className="w-full border border-gray-300 p-2 rounded-md"
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
