import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TbBrandFiverr } from "react-icons/tb";

const Linkler = () => {
  return (
    <div className="flex text-xl gap-7">
      <a
        href="https://www.linkedin.com/in/beratyurtoglu/"
        target="_blank"
        className="bg-vurgu shadow-sm p-3 rounded-full transition-all duration-600 ease-out hover:scale-105 hover:opacity-80"
      >
        <FaLinkedinIn className="text-white" />
      </a>
      <a
        href="https://github.com/beratyurtoglu"
        target="_blank"
        className="bg-vurgu shadow-sm p-3 rounded-full transition-all duration-600 ease-out hover:scale-105 hover:opacity-80"
      >
        <FiGithub className="text-white" />
      </a>
      <a
        href="https://www.fiverr.com/beratyurtoglu/buying?source=avatar_menu_profile"
        target="_blank"
        className="bg-vurgu shadow-sm p-3 rounded-full transition-all duration-600 ease-out hover:scale-105 hover:opacity-80"
      >
        <TbBrandFiverr className="text-white" />
      </a>
    </div>
  );
};

export default Linkler;
