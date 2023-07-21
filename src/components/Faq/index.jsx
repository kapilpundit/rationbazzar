import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import apiRequest from "../../../utils/apiRequest";
import languageModel from "../../../utils/languageModel";
import Accodion from "../Helpers/Accodion";
import InputCom from "../Helpers/InputCom";
import LoaderStyleOne from "../Helpers/Loaders/LoaderStyleOne";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
export default function Faq({ datas }) {
  const { faqs } = datas;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [langCntnt, setLangCntnt] = useState(null);
  useEffect(() => {
    setLangCntnt(languageModel());
  }, []);
  const sendHandler = () => {
    setLoading(true);
    apiRequest
      .contact({
        name: name,
        email: email,
        subject: subject,
        message: message,
      })
      .then((res) => {
        setLoading(false);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        toast.success(res && res.data.notification);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="w-full bg-white">
        <div className="faq-page-wrapper w-full mb-10">
          <div className="page-title w-full">
            <PageTitle
              title={langCntnt && langCntnt.Frequently_asked_questions}
              breadcrumb={[
                { name: langCntnt && langCntnt.home, path: "/" },
                { name: langCntnt && langCntnt.FAQ, path: "/faq" },
              ]}
            />
          </div>
        </div>
        <div className="contact-wrapper w-full">
          <div className="container-x mx-auto">
            <div className="main-wrapper w-full lg:flex lg:space-x-[30px]">
              <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
                <h1 className="text-qblack font-bold text-[22px] mb-4">
                  {langCntnt && langCntnt.Frequently_asked_questions}
                </h1>
                <div className="flex flex-col space-y-7 justify-between">
                  {faqs.map((faq) => (
                    <Accodion
                      key={faq.id}
                      title={faq.question}
                      des={faq.answer}
                    />
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <div
                  className="bg-white sm:p-10 p-5 rounded"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 15px 64px" }}
                >
                  <div className="title flex flex-col items-center">
                    <h1 className="lg:text-[34px] text-xl font-bold text-qblack">
                      {langCntnt && langCntnt.Have_Any_Qustion}
                    </h1>
                    <span className="-mt-3 block">
                      <svg
                        width="354"
                        height="30"
                        viewBox="0 0 354 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 28.8027C17.6508 20.3626 63.9476 8.17089 113.509 17.8802C166.729 28.3062 341.329 42.704 353 1"
                          stroke="#df3a4b"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="inputs mt-5">
                    <div className="mb-4">
                      <InputCom
                        label={langCntnt && langCntnt.Name + "*"}
                        placeholder={langCntnt && langCntnt.Name}
                        name="first_name"
                        inputClasses="h-[50px]"
                        value={name}
                        inputHandler={(e) => setName(e.target.value)}
                        error={!!(errors && Object.hasOwn(errors, "name"))}
                      />
                      {errors && Object.hasOwn(errors, "name") ? (
                        <span className="text-sm mt-1 text-qred">
                          {errors.name[0]}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="mb-4">
                      <InputCom
                        label={langCntnt && langCntnt.Email_Address + "*"}
                        placeholder={langCntnt && langCntnt.Email}
                        name="email"
                        inputClasses="h-[50px]"
                        value={email}
                        inputHandler={(e) => setEmail(e.target.value)}
                        error={!!(errors && Object.hasOwn(errors, "email"))}
                      />
                      {errors && Object.hasOwn(errors, "email") ? (
                        <span className="text-sm mt-1 text-qred">
                          {errors.email[0]}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="mb-4">
                      <InputCom
                        label={langCntnt && langCntnt.Subject}
                        placeholder={langCntnt && langCntnt.Subject}
                        name="subject"
                        inputClasses="h-[50px]"
                        value={subject}
                        error={!!(errors && Object.hasOwn(errors, "subject"))}
                        inputHandler={(e) => setSubject(e.target.value)}
                      />
                      {errors && Object.hasOwn(errors, "subject") ? (
                        <span className="text-sm mt-1 text-qred">
                          {errors.subject[0]}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="mb-5">
                      <h6 className="input-label text-qgray capitalize text-[13px] font-normal block mb-2 ">
                        {langCntnt && langCntnt.Message}*
                      </h6>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={langCntnt && langCntnt.Message}
                        className={` w-full h-[105px] rounded focus:ring-0 focus:outline-none p-6 border placeholder:text-sm ${!!(errors && Object.hasOwn(errors, "message"))
                            ? "border-qred"
                            : "border-[#CBECD9]"
                          }`}
                      ></textarea>
                      {errors && Object.hasOwn(errors, "message") ? (
                        <span className="text-sm mt-1 text-qred">
                          {errors.message[0]}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div>
                      <button
                        disabled={
                          name && email && subject && message ? false : true
                        }
                        onClick={sendHandler}
                        type="button"
                        className="disabled:bg-gray-400 disabled:cursor-not-allowed bg-qblack text-white text-sm font-semibold w-full h-[50px] flex justify-center items-center rounded"
                      >
                        <span>{langCntnt && langCntnt.Send_Now}</span>
                        {loading && (
                          <span
                            className="w-5"
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
          </div>
        </div>
      </div>
    </Layout>
  );
}
