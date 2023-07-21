// import Image from "next/image";
// import Link from "next/link";
import Image from "next/image";
import Link from "next/link";
import ShopNowBtn from "../Helpers/Buttons/ShopNowBtn";
import SimpleSlider from "../Helpers/SliderCom";
import FontAwesomeCom from "../Helpers/icons/FontAwesomeCom";
export default function Banner({ className, sliders = [], services = [] }) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    fade: true,
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(/assets/images/hero-bg.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className={`w-full ${className || ""}`}
      >
        <div className="container-x mx-auto h-full">
          <div className="main-wrapper w-full h-full pt-10">
            {/*    slider area*/}
            <div className="hero-slider-wrapper xl:h-[646px] mb-20 xl:mb-0  w-full">
              <SimpleSlider settings={settings}>
                {sliders.length > 0 &&
                  sliders.map((item, i) => (
                    <div
                      key={i}
                      className="item flex items-center w-full xl:h-[576px] h-fit"
                    >
                      <div className="w-full h-full xl:flex items-center">
                        <div className="flex-1">
                          <p className="md:text-[34px] text-[20px] font-medium text-[#DE4839]">
                            {item.title_one}
                          </p>
                          <h1 className="md:text-[66px] text-[40px]  font-bold text-qblack md:leading-[80px] leading-[40px] mb-[30px]">
                            {item.title_two}
                          </h1>

                          <Link
                            href={{
                              pathname: "/single-product",
                              query: { slug: item.product_slug },
                            }}
                            passhref
                          >
                            <a rel="noopener noreferrer">
                              <ShopNowBtn
                                className="md:w-[160px] w-[145px] h-[52px] bg-[#DE4839]"
                                textColor="text-white group-hover:text-white"
                              />
                            </a>
                          </Link>
                        </div>
                        <div className="xl:w-[626px] w-full mt-5 xl:mt-0 xl:h-full h-[400px] relative">
                          <Image
                            layout="fill"
                            objectFit="contain"
                            src={process.env.NEXT_PUBLIC_BASE_URL + item.image}
                            alt="banner"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </SimpleSlider>
            </div>
            <div className="best-services rounded w-full bg-[#DE4839] flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:h-[110px] h-full px-10 lg:py-0 py-10">
              {services.map((service) => (
                <div key={service.id} className="item">
                  <div className="flex space-x-5 items-center">
                    <div>
                      <span className="w-10 h-10 text-white">
                        {/*<svg*/}
                        {/*    width="36"*/}
                        {/*    height="36"*/}
                        {/*    viewBox="0 0 36 36"*/}
                        {/*    fill="none"*/}
                        {/*    xmlns="http://www.w3.org/2000/svg"*/}
                        {/*>*/}
                        {/*  <path*/}
                        {/*      d="M1 1H5.63636V24.1818H35"*/}
                        {/*      stroke="#FFBB38"*/}
                        {/*      strokeWidth="2"*/}
                        {/*      strokeMiterlimit="10"*/}
                        {/*      strokeLinecap="square"*/}
                        {/*  />*/}
                        {/*  <path*/}
                        {/*      d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"*/}
                        {/*      stroke="#FFBB38"*/}
                        {/*      strokeWidth="2"*/}
                        {/*      strokeMiterlimit="10"*/}
                        {/*      strokeLinecap="square"*/}
                        {/*  />*/}
                        {/*  <path*/}
                        {/*      d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"*/}
                        {/*      stroke="#FFBB38"*/}
                        {/*      strokeWidth="2"*/}
                        {/*      strokeMiterlimit="10"*/}
                        {/*      strokeLinecap="square"*/}
                        {/*  />*/}
                        {/*  <path*/}
                        {/*      d="M34.9982 1H11.8164V18H34.9982V1Z"*/}
                        {/*      stroke="#FFBB38"*/}
                        {/*      strokeWidth="2"*/}
                        {/*      strokeMiterlimit="10"*/}
                        {/*      strokeLinecap="square"*/}
                        {/*  />*/}
                        {/*  <path*/}
                        {/*      d="M11.8164 7.18164H34.9982"*/}
                        {/*      stroke="#FFBB38"*/}
                        {/*      strokeWidth="2"*/}
                        {/*      strokeMiterlimit="10"*/}
                        {/*      strokeLinecap="square"*/}
                        {/*  />*/}
                        {/*</svg>*/}
                        <FontAwesomeCom
                          className="w-8 h-8"
                          icon={service.icon}
                        />
                      </span>
                    </div>
                    <div>
                      <p className="text-white text-[15px] font-700 tracking-wide mb-1">
                        {service.title}
                      </p>
                      <p className="text-sm text-white line-clamp-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
