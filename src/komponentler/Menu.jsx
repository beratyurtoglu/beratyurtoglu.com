import React from "react";
import { Link } from "react-router-dom";
import { SiBuymeacoffee } from "react-icons/si";
import { IoPersonCircle } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";

const Menu = () => {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap">
      <Link
        to="/"
        className="
        bg-white shadow-sm rounded-full p-3 flex items-center justify-between transition-all duration-600 ease-out hover:scale-105"
      >
        <p className="text-xl text-[#1A4757]">Ana sayfa</p>
        <SiBuymeacoffee className="md:ml-8 text-2xl text-vurgu" />
      </Link>
      <Link
        to="/hakkimda"
        className="bg-white shadow-sm rounded-full p-3 flex items-center justify-between transition-all duration-600 ease-out hover:scale-105"
      >
        <p className="text-xl text-[#1A4757]">Hakkımda</p>
        <IoPersonCircle className="md:ml-8 text-2xl text-vurgu" />
      </Link>
      <Link
        to="/portfolyom/"
        className="bg-white shadow-sm rounded-full p-3 flex items-center justify-between transition-all duration-600 ease-out hover:scale-105"
      >
        <p className="text-xl text-[#1A4757]">Portfolyom</p>
        <MdWork className="md:ml-8 text-2xl text-vurgu" />
      </Link>
      <Link
        to="/iletisim"
        className="bg-white shadow-sm rounded-full p-3 flex items-center justify-between transition-all duration-600 ease-out hover:scale-105"
      >
        <p className="text-xl text-[#1A4757]">İletişim</p>
        <MdAlternateEmail className="md:ml-8 text-2xl text-vurgu" />
      </Link>
    </div>
  );
};

export default Menu;
