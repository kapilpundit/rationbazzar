import React from "react";
import Profile from "../../src/components/Auth/Profile";
import Layout from "../../src/components/Partials/Layout";
import PageHead from "../../src/components/Helpers/PageHead";
function Index() {
  return (
    <>
      <PageHead title="Ecoshop | Dashboard" />
      <Layout childrenClasses="pt-0 pb-0">
        <Profile />
      </Layout>
    </>
  );
}

export default Index;
