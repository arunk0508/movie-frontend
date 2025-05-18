import React from "react";
import logo from "./../assets/Images/logo.jpg";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">

     
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      

      {/* Logo */}
      <div className="absolute  z-10">
        <img src={logo} alt="logo" className="w-[100%]md:w-[160px]" />
      </div>

      {/* Signup Box */}
      <div className="z-10 bg-white/10 p-8 rounded-xl backdrop-blur-xl shadow-2xl w-[90%] max-w-md border border-gray-600">
        <h2 className="text-3xl font-bold mb-6 text-center">Create Your Account</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
           <input
            type="phone number"
            placeholder="Phone Number"
            className="p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition duration-300 py-3 rounded font-semibold"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-6 text-gray-400 text-sm">
          Already have an account?
          <Link to="/login" className="text-white hover:underline ml-2">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
