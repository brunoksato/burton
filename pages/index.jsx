import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/Header/Header";
import Beers from "../components/Sections/Beers";

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Burton" />
      <Header />
      <Beers />
    </Layout>
  );
};

export default HomePage;
