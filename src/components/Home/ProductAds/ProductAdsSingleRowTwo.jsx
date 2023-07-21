import Link from "next/link";
import ShopNowBtn from "../../Helpers/Buttons/ShopNowBtn";

export default function ProductsAdsSingleRowTwo({
  className,
  ads,
  sectionHeight,
}) {
  return (
    <div className={`w-full ${className || ""}`}>
      <div className="container-x mx-auto">
        <div
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL + ads.image
              })`,
            backgroundSize: `cover`,
            backgroundRepeat: `no-repeat`,
          }}
          className={`w-full ${sectionHeight} flex flex-col items-center justify-center rounded overflow-hidden relative`}
        >
          <div className="w-full h-full bg-black bg-opacity-50 absolute left-0 top-0"></div>
          <h2 className="lg:text-[56px] text-[35px] font-bold text-white leading-[40px] text-center mb-5 relative z-10">
            {ads.title_one}
          </h2>
          <div className="mt-[34px]">
            <Link
              href={{
                pathname: "/products",
                query: { category: ads.product_slug },
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
    </div>
  );
}
