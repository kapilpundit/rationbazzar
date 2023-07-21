import React, {useEffect, useState} from "react";
import CountDown from "../Helpers/CountDown";
import languageModel from "../../../utils/languageModel";

function CountDownWidget({ endTime }) {
  const { showDate, showHour, showMinute, showSecound } = CountDown(
    `${endTime}`
  );
  const [langCntnt, setLangCntnt] = useState(null);
  useEffect(() => {
    setLangCntnt(languageModel());
  }, []);
  return (
    <div className="sm:mr-[75px]">
      <div className="countdown-wrapper w-full flex sm:space-x-6 space-x-3 sm:justify-between justify-evenly">
        <div className="countdown-item">
          <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
            <span className="font-700 sm:text-[30px] text-base text-[#EB5757]">
              {showDate}
            </span>
          </div>
          <p className="sm:text-[18px] text-xs font-500 text-center leading-8 text-white">
            {langCntnt && langCntnt.Days}
          </p>
        </div>
        <div className="countdown-item">
          <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
            <span className="font-700 sm:text-[30px] text-base text-[#2F80ED]">
              {showHour}
            </span>
          </div>
          <p className="sm:text-[18px] text-xs font-500 text-center leading-8 text-white">
            {langCntnt && langCntnt.Hours}
          </p>
        </div>
        <div className="countdown-item">
          <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
            <span className="font-700 sm:text-[30px] text-base text-[#219653]">
              {showMinute}
            </span>
          </div>
          <p className="sm:text-[18px] text-xs font-500 text-center leading-8 text-white">
            {langCntnt && langCntnt.Minutes}
          </p>
        </div>
        <div className="countdown-item">
          <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
            <span className="font-700 sm:text-[30px] text-base text-[#EF5DA8]">
              {showSecound}
            </span>
          </div>
          <p className="sm:text-[18px] text-xs font-500 text-center leading-8 text-white">
            {langCntnt && langCntnt.Seconds}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountDownWidget;
