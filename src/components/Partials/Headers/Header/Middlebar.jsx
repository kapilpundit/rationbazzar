import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiRequest from "../../../../../utils/apiRequest";
import languageModel from "../../../../../utils/languageModel";
import { fetchWishlist } from "../../../../store/wishlistData";
import Cart from "../../../Cart";
import SearchBox from "../../../Helpers/SearchBox";
import ThinBag from "../../../Helpers/icons/ThinBag";
import ThinPeople from "../../../Helpers/icons/ThinPeople";
export default function Middlebar({ className, settings }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { wishlistData } = useSelector((state) => state.wishlistData);
  const wishlists = wishlistData && wishlistData.wishlists;
  const [profile, setProfile] = useState(false);
  const [auth, setAuth] = useState(null);
  const { compareProducts } = useSelector((state) => state.compareProducts);
  useEffect(() => {
    setAuth(JSON.parse(localStorage.getItem("auth")));
  }, []);
  const profilehandler = () => {
    setProfile(!profile);
  };
  const logout = () => {
    if (auth) {
      apiRequest.logout(auth.access_token);
      localStorage.removeItem("auth");
      dispatch(fetchWishlist());
      router.push("/login");
    }
  };
  //cart
  const { cart } = useSelector((state) => state.cart);
  const [cartItems, setCartItem] = useState(null);
  useEffect(() => {
    cart && setCartItem(cart.cartProducts);
  }, [cart]);
  const [langCntnt, setLangCntnt] = useState(null);
  useEffect(() => {
    setLangCntnt(languageModel());
  }, []);
  return (
    <div className={`w-full h-[86px] bg-white ${className}`}>
      <div className="container-x mx-auto h-full">
        <div className="relative h-full">
          <div className="flex justify-between items-center h-full">
            <div className="relative">
              <Link href="/" passHref>
                <a rel="noopener noreferrer">
                  {settings && (
                    <h2>Ration Bazzar</h2>
                  )}
                </a>
              </Link>
            </div>
            <div className="w-[517px] h-[44px]">
              <SearchBox className="search-com" />
            </div>
            <div className="flex space-x-6 items-center relative">


              <div className="cart-wrapper group relative py-4">
                <div className="cart relative cursor-pointer">
                  <Link href="/cart" passHref>
                    <a rel="noopener noreferrer">
                      <span className="cursor-pointer">
                        <ThinBag />
                      </span>
                    </a>
                  </Link>
                  <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] ">
                    {cartItems ? cartItems.length : 0}
                  </span>
                </div>

                <Cart className="absolute -right-[45px] top-11 z-50 hidden group-hover:block rounded" />
              </div>
              <div>
                {auth ? (
                  <button onClick={profilehandler} type="button">
                    <span>
                      <ThinPeople />
                    </span>
                  </button>
                ) : (
                  <Link href="/login" passHref>
                    <a rel="noopener noreferrer">
                      <span className="cursor-pointer">
                        <ThinPeople />
                      </span>
                    </a>
                  </Link>
                )}
              </div>

              {profile && (
                <>
                  <div
                    onClick={() => setProfile(false)}
                    className="w-full h-full fixed top-0 left-0 z-30"
                    style={{ zIndex: "35", margin: "0" }}
                  ></div>
                  <div
                    className="w-[208px] h-[267px] bg-white absolute right-0 top-11 z-40 border-t-[3px] border-qgreen flex flex-col justify-between rounded"
                    style={{
                      boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                    }}
                  >
                    <div className="menu-item-area w-full  p-5">
                      <ul className="w-full  flex flex-col space-y-7">
                        <li className="text-base text-qgraytwo">
                          <span className="line-clamp-1">
                            {langCntnt && langCntnt.Hi},{" "}
                            {auth && auth.user.name}{" "}
                          </span>
                        </li>
                        <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                          <Link href="/profile#dashboard" passHref>
                            <a rel="noopener noreferrer">
                              <span className="capitalize">
                                {langCntnt && langCntnt.profile}
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                          <Link href="/contact" passHref>
                            <a rel="noopener noreferrer">
                              <span className="capitalize">
                                {langCntnt && langCntnt.Support}
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="text-base text-qgraytwo cursor-pointer hover:text-qblack hover:font-semibold">
                          <Link href="/faq" passHref>
                            <a rel="noopener noreferrer">
                              <span className="capitalize">
                                {langCntnt && langCntnt.FAQ}
                              </span>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="w-full h-10 flex justify-center items-center border-t border-qgray-border">
                      <button
                        onClick={logout}
                        type="button"
                        className="text-qblack text-base font-semibold"
                      >
                        {langCntnt && langCntnt.Sign_Out}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
