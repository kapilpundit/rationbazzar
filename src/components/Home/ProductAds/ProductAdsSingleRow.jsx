import Link from "next/link";
import ShopNowBtn from "../../Helpers/Buttons/ShopNowBtn";

export default function ProductsAdsSingleRow({
  className,
  ads,
  sectionHeight,
}) {
  return (
    <div className={`w-full ${className || ""}`}>
      <div
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_URL + ads.image
            })`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
        }}
        className={`w-full ${sectionHeight} flex flex-col items-center justify-center bg-center`}
      >
        <h2 className="lg:text-[56px] text-[40px] font-bold text-tblack leading-[40px] text-center mb-5">
          {ads.title_one}
        </h2>
        <p className="text-lg text-tblack text-center md:w-[616px]">
          {ads.title_two}
        </p>
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
                className="md:w-[160px] w-[145px] h-[52px] bg-qred"
                textColor="text-white group-hover:text-white"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
