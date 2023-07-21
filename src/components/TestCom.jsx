import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import modify_obj_key_and_return_new_obj from "../../utils/modify_obj_key_and_return_new_obj";

export default function TestCom() {
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const [language, setLanguage] = useState(null);
  useEffect(() => {
    if (!language) {
      if (websiteSetup) {
        const newObj = modify_obj_key_and_return_new_obj(
          websiteSetup.payload.language
        );
        setLanguage(newObj);
      }
    }
  });
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold underline text-red-400 bg-blue-500">
          {language && language.Billing_Address}
        </h1>
      </div>
    </>
  );
}
