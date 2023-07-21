// import ThinPeople from "../../../Helpers/icons/ThinPeople";
import { useEffect, useState } from "react";
import languageModel from "../../../../../utils/languageModel";
export default function TopBar({ className, contact }) {
  const [auth, setAuth] = useState(null);
  const [langCntnt, setLangCntnt] = useState(null);
  useEffect(() => {
    setAuth(JSON.parse(localStorage.getItem("auth")));
    setLangCntnt(languageModel());
  }, []);

  return (
    <>
      <div
        className={`w-full bg-qgreenlow h-10 border-b border-qgray-border ${className || ""
          }`}
      >
        <div className="container-x mx-auto h-full">
          <div className="flex justify-between items-center h-full">
            <div className="topbar-nav">
              <ul className="flex space-x-6">
                {/* <li>
                  {auth ? (
                    <Link href="/profile#dashboard" passHref>
                      <a rel="noopener noreferrer">
                        <span className="text-xs leading-6 text-qblack font-500 cursor-pointer">
                          {langCntnt && langCntnt.Account}
                        </span>
                      </a>
                    </Link>
                  ) : (
                    <Link href="/login" passHref>
                      <a rel="noopener noreferrer">
                        <span className="text-xs leading-6 text-qblack font-500 cursor-pointer">
                          {langCntnt && langCntnt.Account}
                        </span>
                      </a>
                    </Link>
                  )}
                </li> */}
                {/* <li>
                  <Link href="/tracking-order" passHref>
                    <a rel="noopener noreferrer">
                      <span className="text-xs leading-6 text-qblack font-500 cursor-pointer">
                        {langCntnt && langCntnt.Track_Order}
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq" passHref>
                    <a rel="noopener noreferrer">
                      <span className="text-xs leading-6 text-qblack font-500 cursor-pointer">
                        {langCntnt && langCntnt.Support}
                      </span>
                    </a>
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="topbar-dropdowns sm:block hidden">
              <div className="flex space-x-6 items-center">
                <div className="flex space-x-2 items-center">
                  <span>
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.23801 8.53147C7.50029 10.7173 9.1693 12.4834 11.3767 13.723C11.5568 13.8244 11.6712 13.8018 11.8147 13.655C12.2344 13.2256 12.653 12.7941 13.1007 12.396C13.925 11.6634 14.9111 11.6591 15.704 12.4133C16.565 13.231 17.4054 14.0704 18.22 14.9346C19.0097 15.7729 19.0183 16.7881 18.2566 17.6447C17.7377 18.2295 17.1896 18.7926 16.6168 19.3245C15.6771 20.1962 14.5378 20.2588 13.3478 20.0376C11.6529 19.7226 10.1327 18.9771 8.69029 18.0763C5.22711 15.911 2.60544 12.9883 0.899747 9.26726C0.458488 8.30491 0.132668 7.30264 0.0258596 6.23887C-0.0917375 5.07045 0.181218 4.04336 1.06158 3.21263C1.48881 2.81021 1.88691 2.37651 2.30552 1.96546C3.26571 1.02468 4.34459 1.01389 5.31126 1.95035C6.0697 2.68614 6.81952 3.43272 7.55207 4.19333C8.49393 5.17186 8.49609 6.16443 7.57149 7.16454C7.15505 7.61551 6.71703 8.04274 6.23801 8.53147ZM1.16299 5.81595C1.12523 5.82458 1.08855 5.83321 1.05079 5.84292C1.26225 6.61647 1.4025 7.42023 1.69811 8.16034C3.24414 12.0205 5.87335 14.9777 9.38508 17.1614C10.6948 17.9759 12.0747 18.6481 13.6153 18.9296C14.6672 19.1217 15.5756 18.9512 16.2801 18.0601C16.5693 17.6943 16.9383 17.3912 17.2652 17.0546C17.8035 16.5 17.8089 16.1246 17.2716 15.5808C16.538 14.8386 15.799 14.1017 15.0578 13.367C14.5723 12.8858 14.2044 12.8836 13.7124 13.3637C13.2453 13.819 12.7922 14.2883 12.325 14.7436C11.9603 15.0986 11.6313 15.1622 11.1911 14.913C10.5805 14.5667 9.95364 14.2312 9.39695 13.8082C7.68693 12.5093 6.22075 10.9848 5.25408 9.03746C4.91855 8.36101 4.98544 8.101 5.52164 7.5853C5.94455 7.17857 6.36639 6.76967 6.77421 6.34784C7.23489 5.87205 7.23381 5.50631 6.76665 5.02945C6.01792 4.26561 5.26163 3.50932 4.49994 2.75735C4.02848 2.29128 3.62498 2.29235 3.14272 2.75735C2.71981 3.16516 2.31955 3.59563 1.89339 3.99805C1.36798 4.49217 1.10905 5.08771 1.16299 5.81595Z"
                        fill="#27AE60"
                      />
                      <path
                        d="M11.0349 0C11.953 0.295611 12.8291 0.486571 13.6275 0.850151C17.0615 2.4102 19.1944 5.04373 19.9691 8.75073C20.0683 9.22436 19.9259 9.51457 19.5742 9.58146C19.2009 9.65159 18.9549 9.44337 18.8535 8.95032C18.3044 6.26177 16.877 4.16445 14.5963 2.64971C13.5638 1.96463 12.4299 1.52013 11.2151 1.27954C11.0878 1.25473 10.9529 1.23531 10.8407 1.17705C10.5796 1.04111 10.4372 0.799444 10.5581 0.529726C10.6444 0.333371 10.8537 0.192039 11.0349 0Z"
                        fill="#27AE60"
                      />
                      <path
                        d="M16.3863 9.17955C16.3777 9.48703 16.2364 9.70496 15.9192 9.75567C15.6095 9.8053 15.3797 9.66828 15.2816 9.36727C15.1931 9.0954 15.1575 8.80626 15.0615 8.5387C14.3839 6.64528 13.0796 5.43047 11.1203 4.93635C11.0319 4.91369 10.9423 4.89859 10.8539 4.87593C10.5054 4.78746 10.3144 4.53932 10.3597 4.234C10.4083 3.9071 10.6823 3.71614 11.0459 3.75498C13.5295 4.0247 16.095 6.58055 16.3712 9.05764C16.3755 9.09648 16.3809 9.13532 16.3863 9.17955Z"
                        fill="#27AE60"
                      />
                    </svg>
                  </span>
                  <span className="text-xs text-qblack font-500 leading-none">
                    {contact && contact.phone}
                  </span>
                </div>
                <div className="flex space-x-2 items-center">
                  <span>
                    <svg
                      width="17"
                      height="12"
                      viewBox="0 0 17 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.24976 11.6506C6.05064 11.6506 3.85153 11.6513 1.65176 11.65C0.57874 11.6493 0.000808974 11.0669 0.000161795 9.98673C0.000161795 7.2058 -0.000485385 4.42422 0.000808974 1.64264C0.00145615 0.587739 0.587154 0.000747299 1.64141 0.000747299C6.072 0.000100119 10.5032 -0.000547061 14.9338 0.000747299C15.9855 0.000747299 16.5686 0.589034 16.5693 1.64782C16.5705 4.4294 16.5699 7.21033 16.5693 9.99191C16.5686 11.0701 15.9894 11.65 14.9125 11.65C12.6914 11.6513 10.4709 11.6506 8.24976 11.6506ZM1.7016 0.990285C1.79867 1.09578 1.86533 1.17473 1.93782 1.24722C3.65802 2.95836 5.37887 4.6695 7.10037 6.38C7.88928 7.16373 8.67949 7.16503 9.4671 6.38259C11.1886 4.67274 12.9088 2.96159 14.6297 1.2498C14.7028 1.17732 14.7701 1.09901 14.8711 0.990285C10.4651 0.990285 6.10695 0.990285 1.7016 0.990285ZM10.709 6.50037C10.0263 7.25628 9.3545 7.93905 8.27694 7.93776C7.19874 7.93582 6.53732 7.23492 5.88626 6.53726C4.51359 7.9397 3.1584 9.32467 1.86016 10.6514C6.1173 10.6514 10.4748 10.6514 14.7727 10.6514C13.4382 9.28842 12.0888 7.90993 10.709 6.50037ZM5.03069 5.86937C3.68844 4.50965 2.33324 3.13633 0.999407 1.78502C0.999407 4.47146 0.999407 7.19609 0.999407 9.97055C2.38761 8.55776 3.73827 7.18444 5.03069 5.86937ZM11.5387 5.80012C12.8661 7.15079 14.2193 8.52734 15.5752 9.90648C15.5752 7.18444 15.5752 4.46046 15.5752 1.71318C14.1993 3.10592 12.8473 4.47535 11.5387 5.80012Z"
                        fill="#27AE60"
                      />
                    </svg>
                  </span>
                  <span className="text-xs text-qblack font-500 leading-none">
                    {contact && contact.email}
                  </span>
                </div>
                {/*<div className="country-select flex space-x-1 items-center">*/}
                {/*  <div>*/}
                {/*    <Image*/}
                {/*      src={`/assets/images/country-logo-16x16.png`}*/}
                {/*      width="16"*/}
                {/*      height="16"*/}
                {/*      alt="country logo"*/}
                {/*      className="overflow-hidden rounded-full"*/}
                {/*    />*/}
                {/*  </div>*/}
                {/*  <Selectbox*/}
                {/*    className="w-fit"*/}
                {/*    defaultValue="United State"*/}
                {/*    datas={[*/}
                {/*      { id: 1, name: "United State" },*/}
                {/*      { id: 2, name: "Bangladesh" },*/}
                {/*      { id: 3, name: "India" },*/}
                {/*    ]}*/}
                {/*  />*/}
                {/*  <div>*/}
                {/*    <Arrow className="fill-current qblack" />*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/*<div className="currency-select flex space-x-1 items-center">*/}
                {/*  <Selectbox*/}
                {/*    defaultValue="USD"*/}
                {/*    className="w-fit"*/}
                {/*    datas={[*/}
                {/*      { id: 1, name: "USD" },*/}
                {/*      { id: 2, name: "BDT" },*/}
                {/*    ]}*/}
                {/*  />*/}
                {/*  <Arrow className="fill-current qblack" />*/}
                {/*</div>*/}
                {/*<div className="language-select flex space-x-1 items-center">*/}
                {/*  <Selectbox*/}
                {/*    defaultValue="Bangla"*/}
                {/*    className="w-fit"*/}
                {/*    datas={[*/}
                {/*      { id: 1, name: "Bangla" },*/}
                {/*      { id: 2, name: "English" },*/}
                {/*    ]}*/}
                {/*  />*/}
                {/*  <Arrow className="fill-current qblack" />*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
