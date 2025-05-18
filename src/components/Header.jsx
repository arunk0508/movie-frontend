import React, { useState } from "react";
import logo from "./../assets/Images/logo.png";
import { Link } from "react-router-dom";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderList from "./HeaderList";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <img
          src={logo}
          className="w-[80px] md:w-[115px] object-cover"
          alt="Logo"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderList key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.slice(0, 3).map((item) => (
            <HeaderList key={item.name} name={""} Icon={item.icon} />
          ))}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderList name={""} Icon={HiDotsVertical} />
            {toggle && (
              <div className="absolute mt-3 bg-[#121212] border border-gray-700 p-3 px-5 py-4">
                {menu.slice(3).map((item) => (
                  <HeaderList key={item.name} name={item.name} Icon={item.icon} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Avatar image links to login */}
      <Link to="/login">
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          className="w-[40px] rounded-full cursor-pointer"
          alt="User Avatar"
        />
      </Link>
    </div>
  );
}

export default Header;
