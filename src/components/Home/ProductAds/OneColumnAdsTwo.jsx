import Link from "next/dist/client/link";
import React from "react";
import ShopNowBtn from "../../Helpers/Buttons/ShopNowBtn";

function OneColumnAdsTwo({ data }) {
  return (
    <div className={`one-column-ads-one sm:h-[166px] h-[140px] w-full`}>
      <div
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL + data.image
            })`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
        }}
        className={`w-full h-full flex flex-col items-center justify-center rounded overflow-hidden relative`}
      >
        <div className="w-full h-full bg-black bg-opacity-50 absolute left-0 top-0"></div>
        <h2 className="lg:text-[35px] text-[20px] font-bold text-white lg:leading-[40px] text-center relative z-10">
          {data.title_one}
        </h2>
        <div className="mt-5">
          <Link
            href={{
              pathname: "/products",
              query: { category: data.product_slug },
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
  );
}

export default OneColumnAdsTwo;
