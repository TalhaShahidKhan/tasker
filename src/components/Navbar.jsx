import React from "react";
import Logo from "../assets/task-list.png";
export default function Navbar() {
  return (
    <>
      <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
        <div className="container mx-auto flex items-center justify-around gap-x-6">
          <a href="/">
            <img className="h-[45px]" src={Logo} alt="Lws" />
          </a>
          <a href="https://github.com/TalhaShahidKhan/tasker" target="_blank" className="px-3 py-4 rounded-xl bg-[#3a3d42] hover:bg-gray-800">
          GitHub
          </a>
        </div>
      </nav>
    </>
  );
}
