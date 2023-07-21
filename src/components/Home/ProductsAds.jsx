import Link from "next/link";
export default function ProductsAds({
  className,
  ads = ["", ""],
  sectionHeight,
  links = [],
}) {
  return (
    <div className={`w-full ${className || ""}`}>
      <div className="container-x mx-auto">
        <div
          className={`${sectionHeight} ${ads.length > 1 && ads.length <= 2
            ? "sm:flex xl:space-x-[30px] md:space-x-5"
            : ""
            } items-center w-full  overflow-hidden`}
        >
          <div
            data-aos="fade-right"
            className={`h-full relative ${ads.length > 1 && ads.length <= 2 ? "sm:w-1/2 w-full" : "w-full"
              }  `}
          >
            <Link href={links[0]} passHref>
              <a>
                <div
                  className="w-full h-full bg-black px-[40px] py-[30px]"
                  style={{
                    backgroundImage: `url(${ads[0]})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="w-[400px] h-full flex flex-col justify-between">
                    <div>
                      <span className="text-black text-base uppercase">
                        Frash Vegetables
                      </span>
                      <h2 className="text-[36px] font-semibold leading-[42px]">
                        The 14 Most Nutrient- Dense Vegetables
                      </h2>
                    </div>
                    <div>
                      <Link href="#">
                        <div className="md:w-[160px] w-[145px] h-[52px] flex justify-center items-center rounded overflow-hidden">
                          <div className="bg-qred" >
                            <span className="text-sm font-600 tracking-wide leading-7 mr-2">
                              Shop Now
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
                                />
                                <rect
                                  x="7"
                                  y="5.54492"
                                  width="6.94219"
                                  height="1.54271"
                                  transform="rotate(135 7 5.54492)"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                {/*<Image*/}
                {/*  layout="fill"*/}
                {/*  objectFit="scale-down"*/}
                {/*  src={`${ads[0]}`}*/}
                {/*  alt=""*/}
                {/*  className="w-full sm:h-full h-auto"*/}
                {/*/>*/}
              </a>
            </Link>
          </div>
          {ads.length > 1 && ads.length <= 2 && (
            <div data-aos="fade-left" className="relative flex-1 h-full">
              <Link href={links[1]} passHref>
                <a>
                  <div
                    className="w-full h-full bg-black px-[40px] py-[30px]"
                    style={{
                      backgroundImage: `url(${ads[1]})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="w-[400px] h-full flex flex-col justify-between">
                      <div>
                        <span className="text-black text-base uppercase">
                          Frash Vegetables
                        </span>
                        <h2 className="text-[36px] font-semibold leading-[42px]">
                          The 14 Most Nutrient- Dense Vegetables
                        </h2>
                      </div>
                      <div>
                        <Link href="#">
                          <div className="md:w-[160px] w-[145px] h-[52px] flex justify-center items-center rounded overflow-hidden">
                            <div className="bg-qred" >
                              <span className="text-sm text-white font-600 tracking-wide leading-7 mr-2" >
                                Shop Now
                              </span>
                              <span className="text-white">
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
                                  />
                                  <rect
                                    x="7"
                                    y="5.54492"
                                    width="6.94219"
                                    height="1.54271"
                                    transform="rotate(135 7 5.54492)"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/*<Image*/}
                  {/*  layout="fill"*/}
                  {/*  objectFit="scale-down"*/}
                  {/*  src={`${ads[1]}`}*/}
                  {/*  alt=""*/}
                  {/*  className="w-full h-full"*/}
                  {/*/>*/}
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
