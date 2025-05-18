import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-6 py-10 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Social Media Icons */}
        <div className="flex gap-4 text-xl">
          <a href="#" className="hover:text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white">
            <FaYoutube />
          </a>
        </div>

        {/* Footer Navigation */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-center md:text-left">
          <a href="#" className="hover:text-white transition">
            Home
          </a>
          <a href="#" className="hover:text-white transition">
            Movies
          </a>
          <a href="#" className="hover:text-white transition">
            Series
          </a>
          <a href="#" className="hover:text-white transition">
            Originals
          </a>
          <a href="#" className="hover:text-white transition">
            Help Center
          </a>
          <a href="#" className="hover:text-white transition">
            Terms of Use
          </a>
          <a href="#" className="hover:text-white transition">
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs mt-10 text-gray-600">
        © {new Date().getFullYear()} MovieFlix Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
