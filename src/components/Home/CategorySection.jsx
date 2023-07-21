import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShopNowBtn from "../Helpers/Buttons/ShopNowBtn";

function CategorySection({
  sectionTitle,
  categories,
  adsOne,
  adsTwo,
  adsThree,
}) {
  return (
    <div className="category-section-wrapper w-full bg-white">
      <div className="container-x mx-auto py-[60px]">
        <div className="mb-[60px]">
          <div className="section-title flex justify-between items-center mb-5">
            <div>
              <h1 className="sm:text-3xl text-xl font-600 text-qblacktext">
                {sectionTitle}
              </h1>
            </div>
          </div>
          <div className="w-full grid xl:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-[30px]">
            {categories.length > 0 &&
              categories
                .slice(0, categories.length > 10 ? 10 : categories.length)
                .map((item, i) => (
                  <div
                    data-aos="fade-left"
                    data-aos-delay={i + "00"}
                    key={i}
                    className="item w-full cursor-pointer group"
                  >
                    <Link
                      href={{
                        pathname: "/products",
                        query: { category: item.slug },
                      }}
                      passhref
                    >
                      <a rel="noopener noreferrer">
                        <div className="w-full h-[192px] relative rounded flex justify-center items-center shadow-lg p-3 mb-5 bg-body rounded">
                          <div className="w-full h-full relative transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out">
                            <Image
                              layout="fill"
                              objectFit="scale-down"
                              src={
                                process.env.NEXT_PUBLIC_BASE_URL + item.image
                              }
                              alt=""
                            />
                          </div>
                        </div>
                        <p className="text-lg text-qgray text-center mt-5 group-hover:text-qred transition duration-300 ease-in-out">
                          {item.name}
                        </p>
                      </a>
                    </Link>
                  </div>
                ))}
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-[30px]">
          <div data-aos="fade-right" className="item w-full rounded">
            <div
              className="w-full flex flex-col justify-between  h-[453px] rounded"
              style={{
                backgroundImage: `url(/assets/images/ads-bg-1.png)`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: "cover",
              }}
            >
              <div className="px-[30px] pt-[30px]">
                <span className="text-sm text-qblack mb-2 inline-block uppercase font-medium">
                  {adsOne.title_one}
                </span>
                <h1 className="text-[34px] leading-[38px] font-semibold text-qblack mb-[20px] w-[277px]">
                  {adsOne.title_two}
                </h1>
                <Link
                  href={{
                    pathname: "/products",
                    query: { category: adsOne.product_slug },
                  }}
                  passHref
                >
                  <a rel="noopener noreferrer">
                    <ShopNowBtn
                      className="w-[128px] h-[40px] bg-qgreen"
                      textColor="text-white group-hover:text-white"
                    />
                  </a>
                </Link>
              </div>
              <div className="w-full h-[230px] relative">
                <Image
                  layout="fill"
                  objectFit="scale-down"
                  src={`${process.env.NEXT_PUBLIC_BASE_URL + adsOne.image}`}
                  alt="cat"
                />
              </div>
            </div>
          </div>
          <div data-aos="fade-up" className="item w-full">
            <div
              className="w-full flex flex-col-reverse justify-between  h-[453px] rounded"
              style={{
                backgroundImage: `url(/assets/images/ads-bg-2.png)`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: "cover",
              }}
            >
              <div className="px-[30px] pb-[30px]">
                <span className="text-sm text-qblack mb-2 inline-block uppercase font-medium">
                  {adsTwo.title_one}
                </span>
                <h1 className="text-[34px] leading-[38px] font-semibold text-qblack mb-[20px] w-[277px]">
                  {adsTwo.title_two}
                </h1>
                <Link
                  href={{
                    pathname: "/products",
                    query: { category: adsTwo.product_slug },
                  }}
                  passhref
                >
                  <a rel="noopener noreferrer">
                    <ShopNowBtn
                      className="w-[128px] h-[40px] bg-[#FE0600]"
                      textColor="text-white group-hover:text-white"
                    />
                  </a>
                </Link>
              </div>
              <div className="w-full h-[230px] relative">
                <Image
                  layout="fill"
                  objectFit="scale-down"
                  src={`${process.env.NEXT_PUBLIC_BASE_URL + adsTwo.image}`}
                  alt="cat"
                />
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="item w-full">
            <div
              className="w-full flex flex-col justify-between  h-[453px] rounded"
              style={{
                backgroundImage: `url(/assets/images/ads-bg-3.png)`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: "cover",
              }}
            >
              <div className="px-[30px] pt-[30px]">
                <span className="text-sm text-qblack mb-2 inline-block uppercase font-medium">
                  {adsThree.title_one}
                </span>
                <h1 className="text-[34px] leading-[38px] font-semibold text-qblack mb-[20px] w-[277px]">
                  {adsThree.title_two}
                </h1>
                <Link
                  href={{
                    pathname: "/products",
                    query: { category: adsThree.product_slug },
                  }}
                  passhref
                >
                  <a rel="noopener noreferrer">
                    <ShopNowBtn
                      className="w-[128px] h-[40px] bg-[#921DFF]"
                      textColor="text-white group-hover:text-white"
                    />
                  </a>
                </Link>
              </div>
              <div className="w-full h-[230px] relative">
                <Image
                  layout="fill"
                  objectFit="scale-down"
                  src={`${process.env.NEXT_PUBLIC_BASE_URL + adsThree.image}`}
                  alt="cat"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySection;
