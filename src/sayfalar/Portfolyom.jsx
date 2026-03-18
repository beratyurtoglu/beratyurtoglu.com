import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import AltBaslik from "../komponentler/AltBaslik";
import Gecis from "../komponentler/Gecis";

const Portfolyom = () => {
  const location = useLocation();
  const getButtonClass = (path) => {
    const isActive = location.pathname.includes(path);
    return `px-6 py-2 rounded-full font-medium transition-all ease-out hover:scale-105 duration-600 ${
      isActive
        ? "bg-vurgu text-white shadow-md"
        : "bg-white text-yazi border border-vurgu"
    }`;
  };

  return (
    <div className="bg-arkaplan flex flex-col items-center min-h-screen text-yazi">
      <div className="w-[90%] lg:w-[50%] min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-6 mt-6 text-vurgu">
            Portfolyom
            <h2 className="text-sm font-medium text-center mt-3 text-yazi">
              Bir portfolyo seçin
            </h2>
          </h1>

          <nav className="flex flex-col gap-4 w-50 text-center lg:flex-row lg:w-90 justify-center">
            <Link
              to="/portfolyom/video_portfolyo"
              className={getButtonClass("video_portfolyo")}
            >
              Video Portfolyo
            </Link>
            <Link
              to="/portfolyom/yazilim_portfolyo"
              className={getButtonClass("yazilim_portfolyo")}
            >
              Yazılım Portfolyo
            </Link>
          </nav>

          <div className="mt-6 pt-6 w-full flex justify-center">
            <Outlet />
          </div>
        </div>

        <div className="mt-auto">
          <AltBaslik />
        </div>
      </div>
      <div className="bg-arkaplan absolute inset-0 overflow-hidden -z-10">
        <ul className="kare">
          {[...Array(8)].map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gecis(Portfolyom);
