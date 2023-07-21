import React from "react";
import PageHead from "../src/components/Helpers/PageHead";
import Layout from "../src/components/Partials/Layout";
import Wishlist from "./../src/components/Wishlist/index";
function wishlist() {
  return (
    <>
      <PageHead title="Wishlist" />
      <Layout childrenClasses="pt-0 pb-0">
        <Wishlist />
      </Layout>
    </>
  );
}
export default wishlist;
