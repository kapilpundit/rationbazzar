import Link from "next/link";
import React, { useEffect, useState } from "react";
import DateFormat from "../../../../../utils/DateFormat";
// import InputCom from "../../../Helpers/InputCom";
// import LoaderStyleOne from "../../../Helpers/Loaders/LoaderStyleOne";
// import StarRating from "../../../Helpers/StarRating";
// import auth from "../../../../../utils/auth";
// import apiRequest from "../../../../../utils/apiRequest";
import languageModel from "../../../../../utils/languageModel";

export default function OrderTab({ orders }) {
  const [langCntnt, setLangCntnt] = useState(null);
  useEffect(() => {
    setLangCntnt(languageModel());
  }, []);
  return (
    <>
      <div className="relative w-full overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            {/* table heading */}
            <tr className="text-base text-qgray whitespace-nowrap px-2 border-b default-border-bottom ">
              <td className="py-4 block whitespace-nowrap text-center">
                {langCntnt && langCntnt.Order}
              </td>
              <td className="py-4 whitespace-nowrap text-center">
                {langCntnt && langCntnt.Date}
              </td>
              <td className="py-4 whitespace-nowrap text-center">
                {langCntnt && langCntnt.Amount}
              </td>
              <td className="py-4 whitespace-nowrap  text-center">
                {langCntnt && langCntnt.Action}
              </td>
            </tr>
            {/* table heading end */}
            {orders &&
              orders.length > 0 &&
              orders.map((item, i) => (
                <tr key={i} className="bg-white border-b hover:bg-gray-50">
                  <td className="text-center py-4">
                    <span className="text-lg text-qgray font-medium">
                      #{item.order_id}
                    </span>
                  </td>
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-qgray  whitespace-nowrap">
                      {DateFormat(item.created_at)}
                    </span>
                  </td>
                  {/*<td className="text-center py-4 px-2">*/}
                  {/*  <span className="text-sm rounded text-green-500 bg-green-100 p-2">*/}
                  {/*    Complated*/}
                  {/*  </span>*/}
                  {/*</td>*/}
                  <td className="text-center py-4 px-2">
                    <span className="text-base text-qblack whitespace-nowrap px-2 ">
                      ${item.total_amount}
                    </span>
                  </td>
                  <td className="py-4 flex justify-center">
                    <div className="flex space-x-2 items-center">
                      <Link href={`/order/${item.order_id}`}>
                        <div className="w-[116px] h-[46px] bg-qred text-white font-bold flex justify-center items-center cursor-pointer rounded">
                          <span>{langCntnt && langCntnt.View_Details}</span>
                        </div>
                      </Link>
                      {/*{item.order_status === "0" && (*/}
                      {/*  <button*/}
                      {/*    type="button"*/}
                      {/*    className="text-green-500 text-sm font-semibold"*/}
                      {/*  >*/}
                      {/*    Review*/}
                      {/*  </button>*/}
                      {/*)}*/}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
