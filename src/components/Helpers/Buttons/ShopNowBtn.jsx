import React, { useEffect, useState } from "react";
import languageModel from "../../../../utils/languageModel";

function ShopNowBtn({ className, textColor }) {
  const [langCntnt, setLangCntnt] = useState(null);
  useEffect(() => {
    setLangCntnt(languageModel());
  }, []);
  return (
    <div
      className={`flex justify-center items-center group rounded relative transition-all duration-300 ease-in-out overflow-hidden cursor-pointer ${className || ""
        }`}
    >
      <div
        className={`flex space-x-1 items-center transition-all duration-300 ease-in-out relative z-10 ${textColor || ""
          }`}
      >
        <span className="text-sm font-600 tracking-wide leading-7 mr-2">
          {langCntnt && langCntnt.Shop_Now}
        </span>
        <span>
          <svg
            width="7"
            height="11"
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current"
          >
            <rect
              x="2.08984"
              y="0.636719"
              width="6.94219"
              height="1.54271"
              transform="rotate(45 2.08984 0.636719)"
            ></rect>
            <rect
              x="7"
              y="5.54492"
              width="6.94219"
              height="1.54271"
              transform="rotate(135 7 5.54492)"
            ></rect>
          </svg>
        </span>
      </div>
      <div
        style={{ transition: `transform 0.25s ease-in-out` }}
        className="w-full h-full bg-black absolute top-0 left-0 right-0 bottom-0 transform scale-x-0 group-hover:scale-x-100 origin-[center_left] group-hover:origin-[center_right]"
      ></div>
    </div>
  );
}

export default ShopNowBtn;
