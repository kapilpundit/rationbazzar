import Link from "next/link";
import React from "react";
import ShopNowBtn from "../../Helpers/Buttons/ShopNowBtn";

function TwoColumnAds({ bannerOne, bannerTwo }) {
  return (
    <div className="w-full h-[295px]">
      <div className="container-x mx-auto h-full">
        <div
          className={`lg:flex xl:space-x-[30px] md:space-x-5 items-center w-full h-full  overflow-hidden`}
        >
          {bannerOne && (
            <div
              className="w-full rounded h-full px-[40px] py-[30px]"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL + bannerOne.image
                  })`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="md:w-[400px] w-full h-full flex flex-col justify-between">
                <div>
                  <p className="text-black text-base uppercase mb-2">
                    {bannerOne.title_one}
                  </p>
                  <h2 className="md:text-[36px] text-[26px] font-semibold md:leading-[42px]">
                    {bannerOne.title_two}
                  </h2>
                </div>
                <div>
                  <Link
                    href={{
                      pathname: "/products",
                      query: { category: bannerOne.product_slug },
                    }}
                    passHref
                  >
                    <a rel="noopener noreferrer">
                      <ShopNowBtn
                        className="md:w-[160px] w-[145px] h-[52px] bg-qyellow"
                        textColor="text-qblack group-hover:text-white"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          )}
          {bannerTwo && (
            <div
              className="w-full rounded h-full px-[40px] py-[30px]"
              style={{
                backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL + bannerTwo.image
                  })`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="w-[400px] h-full flex flex-col justify-between">
                <div>
                  <p className="text-black text-base uppercase mb-2">
                    {bannerTwo.title_one}
                  </p>
                  <h2 className="text-[36px] font-semibold leading-[42px]">
                    {bannerTwo.title_two}
                  </h2>
                </div>
                <div>
                  <Link
                    href={{
                      pathname: "/products",
                      query: { category: bannerTwo.product_slug },
                    }}
                    passHref
                  >
                    <a rel="noopener noreferrer">
                      <ShopNowBtn
                        className="md:w-[160px] w-[145px] h-[52px] bg-qgreen"
                        textColor="text-white group-hover:text-white"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TwoColumnAds;
