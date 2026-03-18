import React, { useState } from "react";
import { IoCopy } from "react-icons/io5";
import AltBaslik from "../komponentler/AltBaslik";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import Gecis from "../komponentler/Gecis";

const Iletisim = () => {
  const [copied, setCopied] = useState(false);
  const Mail = "beratyurtoglu71@outlook.com";

  const HandleCopy = () => {
    navigator.clipboard.writeText(Mail);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex flex-col max-h-screen justify-center items-center overflow-hidden">
      <div className="h-screen w-[90%] flex items-center justify-center">
        <div className="flex-col items-center justify-center text-center flex gap-4">
          <p className="text-yazi text-xl">İletişim için: </p>

          <div className="flex bg-transparent text-yazi border-1 rounded-full gap-5 px-5 py-3 items-center">
            <span className="text-yazi flex items-center justify-center text-center italic">
              {Mail}
            </span>

            <div className="relative flex items-center justify-center w-10 h-10">
              <button
                onClick={HandleCopy}
                disabled={copied}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out transform ${
                  copied
                    ? "opacity-0 scale-50 rotate-90 pointer-events-none"
                    : "opacity-100 scale-100 rotate-0 pointer-events-auto"
                }`}
              >
                <IoCopy className="text-vurgu text-2xl cursor-pointer transition-all duration-300 ease-in-out hover:opacity-70 active:scale-90" />
              </button>

              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out transform pointer-events-none ${
                  copied
                    ? "opacity-100 scale-110 rotate-0"
                    : "opacity-0 scale-50 -rotate-90"
                }`}
              >
                <IoCheckmark className="text-green-500 text-2xl" />
              </div>
            </div>
          </div>

          <Link
            to="/"
            className="bg-white mt-7 rounded-full p-3 flex items-center justify-between transition-all duration-600 ease-out hover:scale-105 shadow-sm"
          >
            <IoMdArrowRoundBack className="text-vurgu text-xl" />
          </Link>
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

export default Gecis(Iletisim);
