import SubscribeInputWidget from "./Helpers/SubscribeInputWidget";
export default function DiscountBanner({ className, datas }) {
  return (
    <div className="w-full bg-gradient-to-t from-transparent to-white">
      <div
        className={`w-full h-[462px] bg-cover print:hidden relative ${className || ""
          }`}
        style={{
          background: "red", // bottom banner
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: `center center`,
        }}
      >
        <div className="container-x mx-auto h-full ">
          <div className="xl:ml-[300px] flex flex-col items-center justify-center w-full h-full">
            <div>
              <div data-aos="fade-up">
                <h1 className="sm:text-3xl text-xl font-700 text-white mb-2">
                  {datas.header}
                </h1>
                <p className="text-center sm:text-[18px] text-sm text-white font-400">
                  {datas.title}
                </p>
              </div>
            </div>
            <SubscribeInputWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
