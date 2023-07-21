import Image from "next/image";
import Link from "next/link";
export default function BestSellers({ className, sallers = [] }) {
  return (
    <div className={`w-full ${className || ""}`}>
      <div className="grid xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 xl:gap-[30px] sm:gap-5 gap-2">
        {sallers.length > 0 &&
          sallers
            .slice(0, sallers.length > 6 ? 6 : sallers.length)
            .map((saller) => (
              <div
                key={saller.id}
                data-aos="fade-left"
                data-aos-duration="500"
                className="item w-full flex flex-col items-center group "
              >
                <div className="sm:w-[170px] sm:h-[170px] w-[140px] h-[140px] shadow rounded-full bg-white flex justify-center items-center overflow-hidden mb-2 relative">
                  <div className="w-full h-full relative transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out">
                    <Image
                      layout="fill"
                      objectFit="scale-down"
                      src={`${process.env.NEXT_PUBLIC_BASE_URL + saller.logo}`}
                      alt={saller.slug}
                    />
                  </div>
                </div>
                <Link
                  href={{
                    pathname: "/seller-products",
                    query: { seller: saller.slug },
                  }}
                >
                  <a rel="noopener noreferrer">
                    <p className="text-base font-500 text-center cursor-pointer">
                      {saller.shop_name}
                    </p>
                  </a>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}
