import Link from "next/link";
import CountDown from "../Helpers/CountDown";
import ShopNowBtn from "../Helpers/Buttons/ShopNowBtn";
import { useEffect, useState } from "react";
import languageModel from "../../../utils/languageModel";

export default function CampaignCountDown({ className, datas }) {
  const { showDate, showHour, showMinute, showSecound } = CountDown(
    datas.end_time
  );
  const [langCntnt, setLangCntnt] = useState(null);
  useEffect(() => {
    setLangCntnt(languageModel());
  }, []);
  return (
    <div>
      <div className={`w-full lg:h-[460px] ${className || ""}`}>
        <div className="container-x mx-auto h-full">
          <div
            data-aos="fade-right"
            className="campaign-countdown w-full h-[470px] rounded relative"
            style={{
              backgroundImage: `url(${
                datas.homepage_image
                  ? process.env.NEXT_PUBLIC_BASE_URL + datas.homepage_image
                  : "/assets/images/campaign-cover-countdown.jpg"
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="lg:w-[600px] w-full xl:p-12 p-5">
              <div className="countdown-wrapper w-full flex lg:justify-between justify-start space-x-5 lg:space-x-0 lg:mb-5 mb-2">
                <div className="countdown-item">
                  <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                    <span className="font-700 sm:text-[30px] text-[14px] text-[#EB5757]">
                      {showDate}
                    </span>
                  </div>
                  <p className="sm:text-[18px] text-[12px] font-500 text-center leading-8">
                    {langCntnt && langCntnt.Days}
                  </p>
                </div>
                <div className="countdown-item">
                  <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                    <span className="font-700 sm:text-[30px] text-[14px] text-[#2F80ED]">
                      {showHour}
                    </span>
                  </div>
                  <p className="sm:text-[18px] text-[12px] font-500 text-center leading-8">
                    {langCntnt && langCntnt.Hours}
                  </p>
                </div>
                <div className="countdown-item">
                  <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                    <span className="font-700 sm:text-[30px] text-[14px] text-[#219653]">
                      {showMinute}
                    </span>
                  </div>
                  <p className="sm:text-[18px] text-[12px] font-500 text-center leading-8">
                    {langCntnt && langCntnt.Minutes}
                  </p>
                </div>
                <div className="countdown-item">
                  <div className="countdown-number sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
                    <span className="font-700 sm:text-[30px] text-[14px] text-[#EF5DA8]">
                      {showSecound}
                    </span>
                  </div>
                  <p className="sm:text-[18px] text-[12px] font-500 text-center leading-8">
                    {langCntnt && langCntnt.Seconds}
                  </p>
                </div>
              </div>
              <div className="countdown-title mb-8">
                <h1 className="text-[44px] text-qblack font-bold">
                  {datas.title}
                </h1>
                <p className="text-tblack text-lg">{datas.description}</p>
              </div>
              <Link href="/flash-sale" passHref>
                <a rel="noopener noreferrer">
                  <ShopNowBtn
                    className="md:w-[160px] w-[145px] h-[52px] bg-qgreen"
                    textColor="text-white group-hover:text-white"
                  />
                </a>
              </Link>
            </div>
            <div className="lg:w-[175px] lg:h-[175px] w-[120px] h-[120px] rounded-full bg-qyellow absolute right-10 bottom-10 flex justify-center items-center">
              <div>
                <h3 className="lg:text-[54px] text-[30px] font-bold text-qblack text-center leading-[49px] mb-1">
                  {datas.offer}%
                </h3>
                <p className="lg:text-[38px] text-[20px]  font-medium text-qblack text-center leading-none">
                  {langCntnt && langCntnt.OFF}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
