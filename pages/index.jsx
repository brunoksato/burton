import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/Header/Header";
import Beers from "../components/Sections/Beers";
import Events from "../components/Sections/Events";

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Burton" />
      <Header />
      <Beers />
      <Events />
    </Layout>
  );
};

export default HomePage;
