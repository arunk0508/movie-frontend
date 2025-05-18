import React from "react";
import logo from "./../assets/Images/logo.jpg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">

        <div className="absolute inset-0 bg-black opacity-70"></div>
      

      {/* Logo */}
      <div className="absolute z-10">
        <img src={logo} alt="logo" className="w-[99%]md:w-[99%]"/>
      </div>

      {/* Login Box */}
      <div className="z-10 bg-white/10 p-8 rounded-xl backdrop-blur-xl shadow-2xl w-[90%] max-w-md border border-gray-600">
        <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition duration-300 py-3 rounded font-semibold"
          >
            Login
          </button>
        </form>

        <div className="flex justify-between mt-4 text-sm text-gray-400">
          <label>
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <Link to="#" className="hover:underline">
            Need help?
          </Link>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-200">
            New to our service?
            <Link to="/signup" className="text-white hover:underline ml-2">
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
