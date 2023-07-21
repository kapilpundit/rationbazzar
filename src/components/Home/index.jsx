import { useEffect, useState } from "react";
import settings from "../../../utils/settings";
import SectionStyleFour from "../Helpers/SectionStyleFour";
import SectionStyleOne from "../Helpers/SectionStyleOne";
import SectionStyleThree from "../Helpers/SectionStyleThree";
import SectionStyleTwo from "../Helpers/SectionStyleTwo";
import ViewMoreTitle from "../Helpers/ViewMoreTitle";
import Layout from "../Partials/Layout";
import Banner from "./Banner";
// import BestSellers from "./BestSellers";
// import ProductsAds from "./ProductsAds";
import Ads from "./Ads";
import CategorySection from "./CategorySection";
import ProductsAdsSingleRow from "./ProductAds/ProductAdsSingleRow";
import TwoColumnAds from "./ProductAds/TwoColumnAds";
export default function Home({ homepageData }) {
  const [homepage] = useState(homepageData);
  const getsectionTitles = homepageData.section_title;
  const [sectionTitles, setSectionTitles] = useState(null);
  useEffect(() => {
    if (!sectionTitles) {
      let tem =
        getsectionTitles &&
        getsectionTitles.map((item, i) => {
          return {
            [item.key]: item.custom ? item.custom : item.default,
          };
        });
      setSectionTitles(Object.assign.apply(Object, tem));
    }
  }, [sectionTitles]);

  const { enable_multivendor } = settings();
  const [isMultivendor, setIsMultivendor] = useState(false);
  useEffect(() => {
    if (!isMultivendor) {
      setIsMultivendor(enable_multivendor && parseInt(enable_multivendor));
    }
  }, [isMultivendor]);
  return (
    <>
      <Layout childrenClasses="pt-0">
        <Ads />
        {homepage && homepage.sliders.length >= 3 && (
          <Banner
            sliders={homepage.sliders}
            services={homepage.services}
            className="banner-wrapper"
          />
        )}
        <CategorySection
          categories={homepage.homepage_categories}
          adsOne={homepage.threeColFirstBanner}
          adsTwo={homepage.threeColSecondBanner}
          adsThree={homepage.threeColThirdBanner}
          sectionTitle={sectionTitles && sectionTitles.My_Market_Category}
        />

        {homepage && (
          <SectionStyleOne
            products={homepage.popularCategoryProducts}
            categories={homepage.popularCategories}
            categoryBackground={
              process.env.NEXT_PUBLIC_BASE_URL +
              homepage.popularCategorySidebarBanner
            }
            sectionTitle={sectionTitles && sectionTitles.Popular_Category}
            seeMoreUrl={`/products?highlight=popular_category`}
            className="category-products"
          />
        )}
        {/*{homepage && (*/}
        {/*  <BrandSection*/}
        {/*    brands={homepage.brands.length > 0 ? homepage.brands : []}*/}
        {/*    sectionTitle="Shop by Brand"*/}
        {/*    className="brand-section-wrapper md:mb-[60px] mb-[30px]"*/}
        {/*  />*/}
        {/*)}*/}

        <div className="w-full md:py-[60px] py-[30px] h-auto bg-[#FFFCF7]">

          {homepage && (
            <ViewMoreTitle
              className="top-selling-product md:mb-[60px] mb-[30px]"
              seeMoreUrl="/all-products"
              categoryTitle={sectionTitles && sectionTitles.Top_Rated_Products}
            >
              <SectionStyleTwo
                products={
                  homepage.topRatedProducts.length > 0
                    ? homepage.topRatedProducts
                    : []
                }
              />
            </ViewMoreTitle>
          )}



          {homepage && (
            <TwoColumnAds
              bannerOne={homepage.twoColumnBannerOne}
              bannerTwo={homepage.twoColumnBannerTwo}
            />
          )}
        </div>
        {homepage && (
          <SectionStyleOne
            categories={
              homepage.featuredCategories.length > 0
                ? homepage.featuredCategories
                : []
            }
            categoryBackground={
              process.env.NEXT_PUBLIC_BASE_URL +
              homepage.featuredCategorySidebarBanner
            }
            products={
              homepage.featuredCategoryProducts.length > 0
                ? homepage.featuredCategoryProducts
                : []
            }
            sectionTitle={sectionTitles && sectionTitles.Featured_Products}
            seeMoreUrl={`/products?highlight=featured_product`}
            className="category-products"
          />
        )}

        {homepage && (
          <ProductsAdsSingleRow
            ads={homepage.singleBannerOne}
            sectionHeight="lg:h-[365px] h-[400px]"
            className="products-ads-section "
          />
        )}
        <div
          className="md:py-[60px] py-[30px]"
          style={{
            backgroundImage: `url(/assets/images/new-arrival-bg.png)`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
          }}
        >
          {homepage && (
            <SectionStyleThree
              products={
                homepage.newArrivalProducts.length > 0
                  ? homepage.newArrivalProducts
                  : []
              }
              sectionTitle={sectionTitles && sectionTitles.New_Arrivals}
              seeMoreUrl="/all-products"
              className="new-products md:mb-[60px] mb-[30px]"
            />
          )}


        </div>
        {homepage && (
          <SectionStyleFour
            products={
              homepage.bestProducts.length > 0 ? homepage.bestProducts : []
            }
            sectionTitle={sectionTitles && sectionTitles.Best_Products}
            seeMoreUrl={`/products?highlight=best_product`}
            className="category-products md:py-[60px] py-[30px] bg-white"
          />
        )}
      </Layout>
    </>
  );
}
