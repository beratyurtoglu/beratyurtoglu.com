import React from "react";
import Profil from "../resimler/profil.png";
import Linkler from "../komponentler/Linkler";
import Menu from "../komponentler/Menu";
import AltBaslik from "../komponentler/AltBaslik";
import Gecis from "../komponentler/Gecis";

const Anasayfa = () => {
  return (
    <div className="relative flex flex-col min-h-screen items-center overflow-hidden">
      <div className="grow flex flex-col p-7 w-[90%] justify-center gap-8 lg:gap-12 lg:w-xl z-10">
        <div className="flex flex-col items-center justify-center gap-10 md:flex lg:flex-row lg:items-start lg:justify-between">
          <div className="order-2 md:order-1 text-yazi flex flex-col items-center md:items-start gap-2">
            <h1 className="text-vurgu text-3xl font-medium">Berat Yurtoğlu</h1>
            <p className="text-lg">
              Bilgisayar Mühendisi <span className="text-vurgu">&</span> Video
              Editör
            </p>

            <div className="order-3 mt-5">
              <Linkler />
            </div>
          </div>

          <div className="order-1 flex items-center justify-center size-35 md:max-w-[30%] transition-all duration-600 ease-out hover:scale-105">
            <img src={Profil} className="rounded-full shadow-sm" />
          </div>
        </div>

        <div className="order-4 w-full md:w-auto">
          <Menu />
        </div>
      </div>

      <AltBaslik />

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

export default Gecis(Anasayfa);
