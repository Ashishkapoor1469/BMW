import { Search } from "lucide-react";
import React from "react";

const Lgnav = () => {
  return (
    <div className="fixed  justify-between h-18 w-full md:flex hidden top-0 left-0 right-0 z-50 border px-9 backdrop-blur-xl">
      <section className="flex items-center justify-between h-full w-full gap-8 text-nowrap">
        <h1 className="text-2xl font-bold text-white">BMW 3d</h1>
        <nav className="flex space-x-7 w-full">
          <a href="#features" className="text-white hover:text-gray-300">
            Cars
          </a>
          <a href="#specifications" className="text-white hover:text-gray-300">
            Models
          </a>
          <a href="#contact" className="text-white hover:text-gray-300">
            About Us
          </a>
        </nav>
      </section>
      <section className="flex items-center justify-end px-4 w-full h-full ">
        <div className="relative">
          <Search className="absolute pointer-events-none translate-3 text-[#586f6e]" size={18} />
          <input
            className="h-10 w-full rounded-[5px] border-0 bg-[#293837] pl-10 pr-3 text-white placeholder-gray-400 focus:outline-none"
            placeholder="Search..."
            type="text"
          />
        </div>
        <button className="bg-[#47EBE0] text-black text-pretty px-4 py-2 rounded hover:bg-[#31eee2] ml-2">
          Explore models
        </button>
      </section>
    </div>
  );
};

export default Lgnav;
