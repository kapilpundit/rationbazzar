import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import languageModel from "../../../utils/languageModel";
import DataIteration from "../Helpers/DataIteration";
import PageTitle from "../Helpers/PageTitle";
import SimpleSlider from "../Helpers/SliderCom";
import FontAwesomeCom from "../Helpers/icons/FontAwesomeCom";
import Star from "../Helpers/icons/Star";
import Layout from "../Partials/Layout";
export default function About({ aboutData }) {
  const hww = [
    {
      id: Math.random(),
      title: aboutData.aboutUs.title_one,
      description: aboutData.aboutUs.description_one,
      icon: aboutData.aboutUs.icon_one,
    },
    {
      id: Math.random(),
      title: aboutData.aboutUs.title_two,
      description: aboutData.aboutUs.description_two,
      icon: aboutData.aboutUs.icon_two,
    },
    {
      id: Math.random(),
      title: aboutData.aboutUs.title_three,
      description: aboutData.aboutUs.description_three,
      icon: aboutData.aboutUs.icon_three,
    },
  ];
  const [videoPopup, setPopup] = useState(false);
  const settings = {
    slidesToShow:
      aboutData.testimonials.length < 3 ? aboutData.testimonials.length : 3,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    dots: false,
    responsive: [

      {
        breakpoint: 1026,
        settings: {
          slidesToShow:
            aboutData.testimonials.length < 2
              ? aboutData.testimonials.length
              : 2,
          slidesToScroll: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  const slider = useRef(null);
  const prev = () => {
    slider.current.slickPrev();
  };
  const next = () => {
    slider.current.slickNext();
  };
  const rs = aboutData.blogs.slice(0, 3).map((item) => {
    return {
      id: item.id,
      by: item.blog.admin_id,
      comments_length: item.blog.active_comments.length,
      title: item.blog.title,
      article: item.blog.description,
      picture: process.env.NEXT_PUBLIC_BASE_URL + item.blog.image,
      slug: item.blog.slug,
    };
  });
  const [langCntnt, setLangCntnt] = useState(null);
  useEffect(() => {
    setLangCntnt(languageModel());
  }, []);
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="about-page-wrapper w-full">
        <div className="title-area w-full">
          <PageTitle
            title={langCntnt && langCntnt.About_us}
            breadcrumb={[
              { name: `${langCntnt && langCntnt.home}`, path: "/" },
              {
                name: `${langCntnt && langCntnt.About_us}`,
                path: "/about",
              },
            ]}
          />
        </div>

        <div className="how-we-work-section w-full py-10 bg-white">
          <div className="container-x mx-auto">
            <div className="flex justify-center w-full ">
              <div className="lg:flex-row flex flex-col lg:justify-evenly w-full items-center">
                {hww.map((item, i) => (
                  <>
                    <div className="w-[286px] mb-10">
                      <div className="flex justify-center">
                        <div className="flex flex-col items-center">
                          <div className="w-[104px] h-[104px] rounded-full bg-qred flex justify-center items-center mb-7">
                            <span>
                              <FontAwesomeCom
                                className="w-10 h-10 text-white"
                                icon={item.icon}
                              />
                            </span>
                          </div>
                          <h3 className="text-center text-[26px] font-bold text-qblack mb-3">
                            {item.title}
                          </h3>
                          <p className="text-[15px] text-[#797979] text-center">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="separator w-[1px] lg:block hidden h-[197px] bg-[#D6EEDD]"></div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="aboutus-wrapper w-full py-10 bg-white">
          <div className="container-x mx-auto">
            <div className="w-full min-h-[665px] lg:flex lg:space-x-12 items-center pb-10 lg:pb-0">
              <div className="lg:w-1/2 w-full h-[560px] rounded overflow-hidden my-5 lg:my-0 relative">
                <div className="absolute left-0 top-0 ">
                  <Image
                    width={375}
                    height={470}
                    src={
                      process.env.NEXT_PUBLIC_BASE_URL +
                      aboutData.aboutUs.image_two
                    }
                    alt="about"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute right-0 bottom-0">
                  <Image
                    width={333}
                    height={403}
                    src={
                      process.env.NEXT_PUBLIC_BASE_URL +
                      aboutData.aboutUs.banner_image
                    }
                    alt="about"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div className="content lg:w-1/2 w-full">
                <div className="about-content">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: aboutData.aboutUs.about_us,
                    }}
                  ></div>
                </div>

                <Link href="/contact" passHref>
                  <a rel="noopener noreferrer">
                    <div className="w-[160px] h-[54px] mt-10 cursor-pointer rounded bg-qred flex justify-center items-center">
                      <span className="text-white">
                        {langCntnt && langCntnt.Contact_Us}
                      </span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="customer-feedback w-full bg-white py-[60px]">
          <div className="title flex justify-center mb-5">
            <h1 className="text-[30px] font-semibold text-qblack">
              {langCntnt && langCntnt.Customers_Feedback}
            </h1>
          </div>
          <div className="feedback-slider-wrapper w-vw relative overflow-hidden">
            <SimpleSlider selector={slider} settings={settings}>
              {aboutData.testimonials.length > 0 &&
                aboutData.testimonials.map((item, i) => (
                  <div
                    key={i}
                    className="item h-auto bg-qred-border sm:px-10 sm:py-9 p-2 rounded"
                  >
                    <div className="">
                      <div className="rating flex space-x-1 items-center mb-4">
                        {Array.from(Array(parseInt(item.rating)), () => (
                          <span key={Math.random()}>
                            <Star w="20" h="20" />
                          </span>
                        ))}
                        {parseInt(item.rating) < 5 && (
                          <>
                            {Array.from(
                              Array(5 - parseInt(item.rating)),
                              () => (
                                <span
                                  key={parseInt(item.rating) + Math.random()}
                                  className="text-gray-500"
                                >
                                  <Star defaultValue={false} w="20" h="20" />
                                </span>
                              )
                            )}
                          </>
                        )}
                        <div>
                          <span className="text-[13px] text-qblack">
                            ({parseInt(item.rating)})
                          </span>
                        </div>
                      </div>
                      <div className="text-[15px] text-qgraytwo leading-[30px] line-clamp-6 mb-4">
                        {item.comment}
                      </div>
                      <div className="flex items-center space-x-2.5 mt-3">
                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden relative">
                          <Image
                            layout="fill"
                            src={`${process.env.NEXT_PUBLIC_BASE_URL + item.image
                              }`}
                            alt="user"
                          />
                        </div>
                        <div>
                          <p className="text-[18px] text-qblack font-medium">
                            {item.name}
                          </p>
                          <p className="text-qgraytwo text-[13px]">
                            {item.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </SimpleSlider>

            <div className="slider-btns flex justify-center mt-[40px]">
              <div className="flex space-x-5 item-center">
                <button
                  onClick={prev}
                  type="button"
                  className="w-[48px] h-[48px] rounded-full overflow-hidden flex justify-center items-center border border-qred text-qred focus:bg-qred focus:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={next}
                  type="button"
                  className="w-[48px] h-[48px] rounded-full overflow-hidden flex justify-center items-center border border-qred text-qred focus:bg-qred focus:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full h-[527px]"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL +
              aboutData.aboutUs.video_background
              })`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
          }}
        >
          <div className="w-full h-full bg-black bg-opacity-60 flex justify-center items-center">
            <div
              onClick={() => setPopup(!videoPopup)}
              className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-white cursor-pointer button is-play"
            >
              <span className="relative z-10">
                <svg
                  width="34"
                  height="38"
                  viewBox="0 0 34 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.19263 0.628906C6.0417 0.925379 6.95562 1.10689 7.72971 1.53849C15.5882 5.91299 23.4345 10.3097 31.2625 14.7386C34.8452 16.7655 34.8594 21.3861 31.2828 23.413C23.4567 27.846 15.6125 32.2467 7.75605 36.6252C4.10039 38.6622 0.0779523 36.3267 0.061741 32.1478C0.0293183 23.4452 0.0394504 14.7426 0.0576882 6.04005C0.0657938 2.98657 2.26243 0.751933 5.19263 0.628906Z"
                    fill="#34A853"
                  />
                </svg>
              </span>
              <div className="button-outer-circle has-scale-animation"></div>
              <div className="button-outer-circle has-scale-animation has-delay-short"></div>
            </div>
          </div>
        </div>
        {videoPopup && (
          <div className="fixed w-full left-0 top-0 h-screen flex justify-center px-2 lg:px-0 items-center z-50">
            <div
              onClick={() => setPopup(!videoPopup)}
              className="fixed w-full h-full left-0 top-0 bg-black bg-opacity-50"
            ></div>

            <div
              data-aos="fade-up"
              className="lg:w-[900px] lg:h-[500px] w-full h-[300px]  bg-white rounded relative z-50 overflow-hidden"
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${aboutData.aboutUs.video_id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        <div className="blog-post-wrapper w-full py-[60px] bg-white">
          <div className="container-x mx-auto">
            <div className="blog-post-title flex justify-center items-cente mb-[30px]">
              <h1 className="text-3xl font-semibold text-qblack">
                {langCntnt && langCntnt.My_Latest_News}
              </h1>
            </div>

            <div className="blogs-wrapper w-full">
              <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-[30px] gap-5">
                <DataIteration datas={rs} startLength={0} endLength={3}>
                  {({ datas }) => (
                    <div
                      data-aos="fade-up"
                      key={datas.id}
                      className="item w-full"
                    >

                    </div>
                    //blog card here
                  )}
                </DataIteration>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
