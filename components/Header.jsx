import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Logo from "../public/logo/logo.svg";
import AppleStore from "../public/logo/appleStore.svg";
import GooglePlay from "../public/logo/googlePlay.svg";

const Header = () => {
  return (
    <>
      <Container>
        <HeaderTop>
          <a href="/">
            <img className="logotype" loading="lazy" src={Logo} alt="logo" />
          </a>
        </HeaderTop>
        <Inline>
          <WrapText>
            <h1>
              The future <br></br>
              of collecting <br></br>
              is digital.
            </h1>
            <p>Join millions of people collecting today.</p>
            <RowButtonApps>
              <LinkButton
                href="https://apps.apple.com/us/app/quidd-digital-collectibles/id1063166978"
                target="_blank"
                alt="AppleStore"
              >
                <img loading="lazy" src={AppleStore} alt="AppleStore" />
              </LinkButton>
              <LinkButton
                href="https://play.google.com/store/apps/details?id=com.quidd.quidd"
                target="_blank"
                alt="GooglePlay"
              >
                <img loading="lazy" src={GooglePlay} alt="GooglePlay" />
              </LinkButton>
            </RowButtonApps>
          </WrapText>
          <WrapImage>
            <img
              loading="lazy"
              src="https://imager-prod.onquidd.com/website/HeroBanner_Final_2.jpg"
              alt="Picture"
            />
          </WrapImage>
        </Inline>
      </Container>
      <RowButtonsMobile>
        <LinkButton
          href="https://apps.apple.com/us/app/quidd-digital-collectibles/id1063166978"
          target="_blank"
        >
          <img src={AppleStore} alt="AppleStore" loading="lazy" />
        </LinkButton>
        <LinkButton
          href="https://play.google.com/store/apps/details?id=com.quidd.quidd"
          target="_blank"
        >
          <img src={GooglePlay} alt="GooglePlay" loading="lazy" />
        </LinkButton>
      </RowButtonsMobile>
    </>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  overflow: hidden !important;

  height: 100vh;

  a {
    padding: 1em 2em;
    z-index: 3;
  }

  .logotype {
    width: 100px;
    height: auto;
    cursor: pointer;
  }

  @media (max-width: 800px) {
    height: 480px;
    a {
      padding: 1em 1em;
      z-index: 3;
    }
  }

  @media (max-width: 768px) {
    height: 500px;
  }

  @media only screen and (min-width: 800px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
    height: 600px;
  }
`;

const HeaderTop = styled.div`
  background-color: #fff;
  position: fixed;
  height: 80px;
  z-index: 99;
  width: 100%;
`;

const Inline = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 0 0 5em;
  margin-top: 180px;
  justify-content: space-around;

  @media (max-width: 3000px) and (min-width: 1980px) {
    justify-content: space-between;
    padding: 0 3em 0 8em;
  }

  @media (max-width: 1980px) {
    margin-top: 220px;
  }

  @media (max-width: 1640px) {
    margin-top: 280px;
  }

  @media (max-width: 1024px) {
    margin-top: 150px;
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    margin-top: 100px;
    justify-content: center;
    padding: 0px 3em 0 3em;
  }
`;

const WrapImage = styled.div`
  margin-top: -70px;
  img {
    max-height: 550px;
  }

  @media (max-width: 1980px) {
    margin-top: -60px;
    img {
      max-height: 500px;
    }
  }

  @media (max-width: 1680px) {
    margin-top: -60px;
    img {
      max-height: 410px;
    }
  }

  @media (min-width: 768px) and (max-width: 980px) {
    img {
      max-height: 180px;
    }
  }

  @media (min-width: 981px) and (max-width: 1200px) {
    img {
      max-height: 350px;
    }
  }

  @media (max-width: 810px) {
    margin-top: -30px;
    img {
      max-height: 190px;
    }
  }

  @media (max-width: 768px) {
    margin-top: 0px;
    img {
      max-height: 190px;
    }
  }

  @media (max-width: 550px) {
    img {
      max-height: 180px;
    }
  }

  @media (max-width: 475px) {
    img {
      max-height: 170px;
    }
  }
`;

const WrapText = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: column;

  h1 {
    color: #6b10d6;
    font-weight: bolder;
    font-size: 4.5em;
    line-height: 0.9em;
    letter-spacing: 0.02em;
    margin-bottom: 10px;
    font-family: "LarsseitBold";
    @media (max-width: 2000px) {
      font-size: 4.1em;
    }
    @media (max-width: 2500px) {
      font-size: 4.5em;
    }
    @media (max-width: 1440px) {
      font-size: 3.5em;
    }
  }

  p {
    font-size: 0.9em;
    line-height: 24px;
    color: #545454;
    @media (min-width: 2000px) {
      font-size: 1.1em;
    }
    @media (min-width: 2500px) {
      font-size: 1.3em;
    }
    @media (max-width: 1440px) {
      font-size: 1em;
    }
  }

  @media (max-width: 1100px) {
    h1 {
      font-size: 45px;
      line-height: 45px;
    }
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 2.5rem;
      line-height: 39px;
      text-align: center;
      margin-top: 10px;
    }
    p {
      text-align: center;
    }
  }

  @media (max-width: 380px) {
    h1 {
      font-size: 2.3rem;
      line-height: 39px;
      text-align: center;
      margin-top: 10px;
    }
    p {
      text-align: center;
    }
  }

  @media (max-width: 600px) {
    width: auto;
    height: 100%;
    top: 200px;
    overflow: hidden !important;
  }
`;

const RowButtonApps = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const LinkButton = styled.a`
  width: 100%;
  max-width: 162px;
  margin-top: 1em;
  padding: 0 !important;
  margin-right: 1em;
  z-index: 3;
  cursor: pointer;
  @media (max-width: 1000px) {
    margin: 0 auto;
    img {
      margin-bottom: 0;
    }
  }

  @media (min-width: 2000px) {
    max-width: 242px;
  }
  @media (min-width: 2500px) {
    max-width: 262px;
  }
`;

const RowButtonsMobile = styled.div`
  @media (min-width: 1000px) {
    display: none;
  }
  background-color: #6b10d6;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 1em;
`;
