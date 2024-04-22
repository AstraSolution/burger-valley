import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-[#000000e8] flex justify-center items-center min-h-screen bg-[url('https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/07/burgers-with-beef-and-sauces--e1627971510961.jpg')] bg-blend-overlay">
      <div className="bg-[#181818] p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-[#FFBA00]">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* email field */}
          <div className="relative float-label-input pb-5">
            <input
              type="email"
              name="email"
              placeholder=" "
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address",
                },
              })}
              className="shadow-sm block w-full text-white bg-transparent  focus:outline-none focus:shadow-outline border border-[#ffc20a4d] rounded-md py-3 px-4 appearance-none leading-normal"
            />
            <label className="absolute top-3 left-0 text-[#ffc10a] pointer-events-none transition duration-200 ease-in-outbg-white px-4">
              Email
            </label>

            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* password field  */}
          <div className="relative float-label-input pb-5">
            <input
              type="password"
              name="password"
              placeholder=" "
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="shadow-sm block w-full text-white bg-transparent  focus:outline-none focus:shadow-outline border border-[#ffc20a4d] rounded-md py-3 px-4 appearance-none leading-normal"
            />
            <label className="absolute top-3 left-0 text-[#ffc10a] pointer-events-none transition duration-200 ease-in-outbg-white px-4">
              Password
            </label>

            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* login button  */}
          <button
            type="submit"
            className="bg-[#FFBA00] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>

          {/* redirect register page */}
          <p className="text-gray-400 text-right mt-3">
            <small>
              Don't have an account? {""}
              <Link
                className="underline font-semibold text-[#ffc20aa2] hover:text-[#ffc10a]"
                to={"/register"}
              >
                Register
              </Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
