import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import apiRequest from "../../../../utils/apiRequest";
import languageModel from "../../../../utils/languageModel";
import InputCom from "../../Helpers/InputCom";
import LoaderStyleOne from "../../Helpers/Loaders/LoaderStyleOne";
import Layout from "../../Partials/Layout";
// import Thumbnail from "./Thumbnail";
export default function Signup() {
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const router = useRouter();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fssai, setFssai] = useState('')
  const [pan, setPan] = useState('')
  const [gst, setGst] = useState('')
  const [checked, setCheck] = useState(false);
  const [otp, setOtp] = useState("");
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [verify, setVerify] = useState(false);
  const [signupView, setSignupView] = useState(false);
  const [imgThumb, setImgThumb] = useState(null);
  const [langCntnt, setLangCntnt] = useState(null);
  useEffect(() => {
    setLangCntnt(languageModel());
  }, []);
  useEffect(() => {
    if (websiteSetup) {
      setImgThumb(websiteSetup.payload.login_page_image);
    }
  }, [websiteSetup]);
  const rememberMe = () => {
    setCheck(!checked);
  };
  const doSignup = async () => {
    //console.log({ fssai, pan, gst, fname })
    setLoading(true);
    await apiRequest
      .signup({
        name: fname + " " + lname,
        email: email,
        password: password,
        password_confirmation: confirmPassword,
        fssai: fssai,
        pan: pan,
        gst: gst,
        agree: checked ? 1 : "",
      })
      .then((res) => {
        console.log(res)
        setLoading(false);
        toast.success(res.data.notification);
        router.push(`/verify-you?email=${email}`);
        //router.push("/login");
        //redirect('/login')
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setFssai("");
        setPan("");
        setGst("");
        setCheck(false);


      })
      .catch((err) => {
        setLoading(false);
        setErrors(err.response && err.response.data);
      });
  };

  const location = useRouter();
  useEffect(() => {
    if (location.route === "/verify-you") {
      setVerify(true);
    } else {
      setSignupView(true);
    }
  }, [location]);

  const doVerify = async () => {
    setLoading(true);
    await apiRequest
      .verification(
        {
          email: location.query.email,
        },
        otp
      )
      .then((res) => {
        setLoading(false);
        if (res) {
          toast.success(res.data.notification);
          router.push("/login");
        }
      })
      .catch((err) => {
        setLoading(false);
        if (err.response) {
          if (err.response.data.notification) {
            toast.error(err.response.data.notification);
          } else {
            return false;
          }
        } else {
          return false;
        }
      });
  };
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="login-page-wrapper w-full pt-10">
        <div className="container-x mx-auto">
          <div className="lg:flex items-center relative w-full lg:min-h-[700px]">
            {verify ? (
              <div className="lg:w-[572px] w-full lg:h-[700px] bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#CBECD9] rounded">
                <div className="w-full">
                  <div className="title-area flex flex-col justify-center items-center relative text-center mb-7">
                    <h1 className="text-[34px] font-bold leading-[74px] text-qblack">
                      {langCntnt && langCntnt.Verify_You}
                    </h1>
                    {/* <div className="shape -mt-6">
                      <svg
                        width="354"
                        height="30"
                        viewBox="0 0 354 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1"
                          stroke="#27AE60"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div> */}
                  </div>
                  <div className="input-area">
                    <div className="input-item mb-5">
                      <InputCom
                        placeholder="******"
                        label={langCntnt && langCntnt.OTP + "*"}
                        name="otp"
                        type="text"
                        inputClasses="h-[50px]"
                        value={otp}
                        error={errors}
                        inputHandler={(e) => setOtp(e.target.value.trim())}
                      />
                      {/* {errors && Object.hasOwn(errors, "email") ? (
                        <span className="text-sm mt-1 text-qred">
                          {errors.email[0]}
                        </span>
                      ) : (
                        ""
                      )} */}
                    </div>

                    <div className="signin-area mb-3">
                      <div className="flex justify-center">
                        <button
                          disabled={otp ? false : true}
                          onClick={doVerify}
                          type="button"
                          className="bg-qgreen rounded disabled:bg-opacity-60 disabled:cursor-not-allowed  w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
                        >
                          <span className="text-sm text-white block">
                            {langCntnt && langCntnt.Verify}
                          </span>
                          {loading && (
                            <span
                              className="w-5 "
                              style={{ transform: "scale(0.3)" }}
                            >
                              <LoaderStyleOne />
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : signupView ? (
              <div className="lg:w-[572px] w-full lg:h-auto bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#CBECD9] rounded">
                <div className="w-full">
                  <div className="title-area flex flex-col justify-center items-center relative text-center mb-7">
                    <h1 className="text-[34px] font-bold leading-[74px] text-qblack">
                      {langCntnt && langCntnt.Create_Account}
                    </h1>
                    <div className="shape -mt-6">
                      <svg
                        width="354"
                        height="30"
                        viewBox="0 0 354 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1"
                          stroke="#27AE60"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="input-area">
                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                      <div className="h-full">
                        <InputCom
                          placeholder={langCntnt && langCntnt.First_Name}
                          label={langCntnt && langCntnt.First_Name + "*"}
                          name="fname"
                          type="text"
                          inputClasses="h-[50px]"
                          value={fname}
                          inputHandler={(e) => setFname(e.target.value)}
                        />
                        {errors && Object.hasOwn(errors, "name") ? (
                          <span className="text-sm mt-1 text-qred">
                            {errors.name[0]}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="h-full">
                        <InputCom
                          placeholder={langCntnt && langCntnt.Last_Name}
                          label={langCntnt && langCntnt.Last_Name + "*"}
                          name="lname"
                          type="text"
                          inputClasses="h-[50px]"
                          value={lname}
                          inputHandler={(e) => setLname(e.target.value)}
                        />
                        {errors && Object.hasOwn(errors, "name") ? (
                          <span className="text-sm mt-1 text-qred">
                            {errors.name[0]}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="input-item mb-5">
                      <InputCom
                        placeholder={langCntnt && langCntnt.Email}
                        label={langCntnt && langCntnt.Email_Address + "*"}
                        name="email"
                        type="email"
                        inputClasses="h-[50px]"
                        value={email}
                        error={!!(errors && Object.hasOwn(errors, "email"))}
                        inputHandler={(e) => setEmail(e.target.value)}
                      />
                      {errors && Object.hasOwn(errors, "email") ? (
                        <span className="text-sm mt-1 text-qred">
                          {errors.email[0]}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                      <div className="h-full">
                        <InputCom
                          placeholder="******"
                          label={langCntnt && langCntnt.Password + "*"}
                          name="password"
                          type="password"
                          inputClasses="h-[50px]"
                          value={password}
                          inputHandler={(e) => setPassword(e.target.value)}
                        />
                        {errors && Object.hasOwn(errors, "password") ? (
                          <span className="text-sm mt-1 text-qred">
                            {errors.password[0]}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="h-full">
                        <InputCom
                          placeholder="******"
                          label={langCntnt && langCntnt.Confirm_Password + "*"}
                          name="confirm_password"
                          type="password"
                          inputClasses="h-[50px]"
                          value={confirmPassword}
                          inputHandler={(e) =>
                            setConfirmPassword(e.target.value)
                          }
                        />
                        {errors && Object.hasOwn(errors, "password") ? (
                          <span className="text-sm mt-1 text-qred">
                            {errors.password[0]}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    {/* rohit  */}
                    <div className="input-item mb-5">
                      <InputCom
                        placeholder="Fssai"
                        //{langCntnt && langCntnt.Fssai}
                        label="Fssai"
                        //{langCntnt && langCntnt.Fssai + "*"}
                        name="fssai"
                        type="text"
                        inputClasses="h-[50px]"
                        value={fssai}
                        error={!!(errors && Object.hasOwn(errors, "fssai"))}
                        inputHandler={(e) => setFssai(e.target.value)}
                      />
                      {errors && Object.hasOwn(errors, "email") ? (
                        <span className="text-sm mt-1 text-qred">
                          {errors.name[0]}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>

                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                      <div className="h-full">
                        <InputCom
                          placeholder="Pan Number"
                          //{langCntnt && langCntnt.pan_number}
                          label="Pan Number"
                          //{langCntnt && langCntnt.pan_number + "*"}
                          name="pan"
                          type="text"
                          inputClasses="h-[50px]"
                          value={pan}
                          inputHandler={(e) => setPan(e.target.value)}
                        />
                        {errors && Object.hasOwn(errors, "name") ? (
                          <span className="text-sm mt-1 text-qred">
                            {errors.name[0]}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="h-full">
                        <InputCom
                          placeholder="Gst Number"
                          //{langCntnt && langCntnt.gst}
                          label="Gst Number"
                          //{langCntnt && langCntnt.gst + "*"}
                          name="gst"
                          type="text"
                          inputClasses="h-[50px]"
                          value={gst}
                          inputHandler={(e) => setGst(e.target.value)}
                        />
                        {errors && Object.hasOwn(errors, "name") ? (
                          <span className="text-sm mt-1 text-qred">
                            {errors.name[0]}
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="forgot-password-area mb-7">
                      <div className="remember-checkbox flex items-center space-x-2.5">
                        <button
                          onClick={rememberMe}
                          type="button"
                          className="w-5 h-5 text-qblack flex justify-center items-center border border-light-gray"
                        >
                          {checked && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </button>
                        <Link href="/seller-terms-condition">
                          <span className="text-base text-black cursor-pointer">
                            {langCntnt &&
                              langCntnt.I_agree_all_terms_and_condition_in_ecoShop}
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="signin-area mb-3">
                      <div className="flex justify-center">
                        <button
                          onClick={doSignup}
                          type="button"
                          disabled={checked ? false : true}
                          className="bg-qred rounded disabled:bg-opacity-60 disabled:cursor-not-allowed  w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
                        >
                          <span className="text-sm text-white block">
                            {langCntnt && langCntnt.Create_Account}
                          </span>
                          {loading && (
                            <span
                              className="w-5 "
                              style={{ transform: "scale(0.3)" }}
                            >
                              <LoaderStyleOne />
                            </span>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="signup-area flex justify-center">
                      <p className="text-base text-qgraytwo font-normal">
                        {langCntnt && langCntnt.Already_have_an_Account}?
                        <Link href="/login" passhref>
                          <a rel="noopener noreferrer">
                            <span className="ml-2 text-qblack cursor-pointer">
                              {langCntnt && langCntnt.Log_In}
                            </span>
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="flex-1 lg:flex hidden transform scale-60 xl:scale-100   xl:justify-center">
              <div
                className="absolute xl:-right-20 -right-[138px]"
                style={{ top: "calc(50% - 258px)" }}
              >
                {imgThumb && (
                  <Image
                    width={608}
                    height={480}
                    src={`${process.env.NEXT_PUBLIC_BASE_URL + imgThumb.image}`}
                    alt="login"
                  />
                )}
                {/*<Thumbnail />*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
