import { useRouter } from "next/router";
import React from "react";
import CustomPageCom from "../../src/components/CustomPageCom";

export default function Pages() {
  const router = useRouter();
  return (
    <>
      <CustomPageCom slug={router.query.custom} />
    </>
  );
}
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}api/privacy-policy`
//   );
//   const data = await res.json();
//   return { props: { data } };
// }
