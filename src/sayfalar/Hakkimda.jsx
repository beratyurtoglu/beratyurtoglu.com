import React from "react";
import Resim1 from "../resimler/resmim2.webp";
import Resim2 from "../resimler/resmim3.webp";
import { FaFileDownload } from "react-icons/fa";
import AltBaslik from "../komponentler/AltBaslik";
import Gecis from "../komponentler/Gecis";

const Hakkimda = () => {
  return (
    <div className="bg-arkaplan text-yazi relative min-h-screen flex flex-col items-center overflow-y-auto no-scrollbar">
      <div className="w-[90%] flex items-center justify-center mt-7 mb-7 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <div className="font-mincho text-sm leading-7 tracking-wide text-justify max-w-md flex flex-col gap-7 items-center lg:gap-5">
            <h1 className="text-center text-lg mt-7 lg:text-3xl">Hakkımda</h1>

            <hr className="w-full opacity-30" />

            <div className="flex flex-col items-center gap-7 lg:flex-row lg:gap-13">
              <p className="w-60">
                Küçük yaşlardan beri bilgisayarla iç içeyim. Kendimi bildim
                bileli ortaya{" "}
                <span className="underline bg-vurgu/20 text-black">
                  somut ürünler çıkarmayı seviyorum
                </span>
                ; bu bazen kod yazarak, bazen video kurgulayarak oldu.
                Bilgisayar, erken yaşlardan itibaren hayatımın merkezinde yer
                aldı.
              </p>

              <div className="w-60 h-60 overflow-hidden rounded-xl">
                <img
                  src={Resim1}
                  alt="Küçüklük fotoğrafım"
                  className="w-full h-full object-cover transition-all duration-700 ease-out hover:scale-105"
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-7 lg:flex-row-reverse lg:gap-13">
              <p className="w-60">
                Bu ilgi zamanla beni{" "}
                <span className="underline bg-vurgu/20 text-black">
                  bilgisayar mühendisliği
                </span>{" "}
                alanına yönlendirdi. Bilgisayar Mühendisliği öğrencisiyim ve son
                3–4 yıldır yazılımla aktif olarak ilgileniyorum. Aynı zamanda
                yaklaşık 7 yıldır video edit ile uğraşıyorum.
              </p>

              <div className="w-60 h-60 overflow-hidden rounded-xl">
                <img
                  src={Resim2}
                  alt="Güncel fotoğrafım"
                  className="w-full h-full object-cover transition-all duration-700 ease-out hover:scale-105"
                />
              </div>
            </div>

            <p className="w-60 lg:mt-7">
              Bugün hem bilgisayar mühendisliği eğitimime devam ediyor hem de
              freelance video editör olarak çalışıyorum.
            </p>

            <hr className="w-full opacity-30" />
          </div>

          <a
            href="#"
            className="group bg-vurgu gap-2 rounded-lg text-white w-27 h-13 flex items-center justify-center mt-7 mb-7 shadow-sm text-xl font-medium leading-none transition-all duration-500 ease-out hover:scale-105 hover:opacity-90"
          >
            CV
            <FaFileDownload className="transition-transform duration-500 group-hover:translate-y-1" />
          </a>
        </div>
      </div>

      <AltBaslik />

      <div className="bg-arkaplan absolute inset-0 overflow-hidden -z-10">
        <ul className="kare">
          {[...Array(5)].map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gecis(Hakkimda);
