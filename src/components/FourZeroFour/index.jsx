import BreadcrumbCom from "../BreadcrumbCom";
import Layout from "../Partials/Layout";
// import ErrorThumb from "./ErrorThumb";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Image from "next/image";
import languageModel from "../../../utils/languageModel";
export default function FourZeroFour() {
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const [siteDate, setSiteDate] = useState(null);
  const [langCntnt, setLangCntnt] = useState(null);
  useEffect(() => {
    setLangCntnt(languageModel());
  }, []);
  useEffect(() => {
    if (!siteDate) {
      if (websiteSetup) {
        setSiteDate(websiteSetup && websiteSetup.payload?.errorPage);
      }
    }
  }, [siteDate, websiteSetup]);

  return (
    <Layout>
      <div className="cart-page-wrapper w-full">
        <div className="container-x mx-auto">
          <BreadcrumbCom paths={[{ name: "home", path: "/" }]} />
          <div className="empty-card-wrapper w-full">
            <div className="flex justify-center items-center w-full">
              <div>
                <div className="sm:mb-10 mb-0 transform sm:scale-100 scale-50">
                  {siteDate && (
                    <div className="w-[338px] h-[475px] relative">
                      <Image
                        layout="fill"
                        objectFit="scale-down"
                        src={process.env.NEXT_PUBLIC_BASE_URL + siteDate.image}
                        alt="404"
                      />
                    </div>
                  )}
                  {/*<ErrorThumb />*/}
                </div>
                <div data-aos="fade-up" className="empty-content w-full">
                  <h1 className="sm:text-xl text-base font-semibold text-center mb-5">
                    {langCntnt && langCntnt.Sorry_We_cantt_Find_that_page}
                  </h1>
                  <Link href="/">
                    <div className="flex justify-center w-full cursor-pointer ">
                      <div className="w-[180px] h-[50px] ">
                        <span className="yellow-btn rounded">
                          {langCntnt && langCntnt.Back_to_Shop}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
