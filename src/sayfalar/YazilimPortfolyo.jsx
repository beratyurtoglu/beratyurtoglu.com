import React from "react";

const YazilimPortfolyo = () => {
  return (
    <div>
      Yakında eklenecek...
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

export default YazilimPortfolyo;
