import React from "react";
import styled from "styled-components";
import axios from "axios";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Header from "../components/Header";
import SectionOne from "../components/Sections/SectionOne";
import SectionTwo from "../components/Sections/SectionTwo";
import SectionThree from "../components/Sections/SectionThree";

const HomePage = ({ channels, totalCount }) => {
  return (
    <Layout>
      <SEO title="Quidd: Changing the way that people collect." />
      <Header />
      <Container>
        <SectionOne />
        <SectionTwo />
        <SectionThree channels={channels} totalCount={totalCount} />
      </Container>
    </Layout>
  );
};

HomePage.getInitialProps = async () => {
  const result = await axios.get(`https://api-prod.onquidd.com/channels`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });

  let channels = [];
  let totalCount = 0;
  if (result.data) {
    let count = 10;
    channels = [...result.data.results];
    for (let channel of channels) {
      switch (channel.t.trim()) {
        case "Disney":
          channel.o = 1;
          break;
        case "Marvel":
          channel.o = 2;
          break;
        case "Rick and Morty":
          channel.o = 3;
          break;
        case "Game of Thrones":
          channel.o = 4;
          break;
        case "Steven Universe":
          channel.o = 5;
          break;
        case "Hello Kitty":
          channel.o = 6;
          break;
        case "My Little Pony":
          channel.o = 7;
          break;
        case "Star Trek":
          channel.o = 8;
          break;
        case "Dr. Seuss":
          channel.o = 9;
          break;
        case "Naruto Shippuden":
          channel.o = 10;
      }

      if (!channel.o) {
        channel.o = count + 1;
      }
      count++;
    }

    channels = channels.sort((a, b) => a.o - b.o);
    totalCount = channels.length;
  }

  return { channels, totalCount };
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
