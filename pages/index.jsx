import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/Header/Header";
import SectionOne from "../components/Sections/SectionOne";
import SectionTwo from "../components/Sections/SectionTwo";
import Beers from "../components/Sections/Beers";

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Burton" />
      <Header />
      <Beers />
      <SectionOne />
      <SectionTwo />
    </Layout>
  );
};

export default HomePage;
