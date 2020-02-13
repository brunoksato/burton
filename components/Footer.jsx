import React from "react";
import styled from "styled-components";
import Link from "next/link";

import Insta from "../public/logo/instagram.svg";
import Face from "../public/logo/facebook.svg";
import Twitter from "../public/logo/twitter.svg";

const Foooter = () => {
  return (
    <Container>
      <WrapRowContent className="content1">
        <WrapContetnWithButtons>
          <h3>Building your first digital collection has never been easier.</h3>
          <h2>Join today.</h2>
        </WrapContetnWithButtons>
        <ListLinks>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <a
              href="https://quidd.zendesk.com/hc/en-us/sections/204104757-FAQ"
              target="_blank"
              rel="noopener noreferrer"
              alt="FAQ"
            >
              FAQ
            </a>
          </li>
          <li>
            <Link href="/password/forgot">
              <a>Forgot Password</a>
            </Link>
          </li>
          <li>
            <Link href="/terms">
              <a>Terms</a>
            </Link>
          </li>
          <li>
            <Link href="/privacy">
              <a>Privacy</a>
            </Link>
          </li>
        </ListLinks>
      </WrapRowContent>
      <WrapRowContent>
        <Copyright>
          © 2019 Quidd, Inc. All rights reserved | Made with love in NYC.
        </Copyright>
        <ContainerIcons>
          <a
            href="https://twitter.com/quidd"
            target="_blank"
            rel="noopener noreferrer"
            alt="Twitter"
          >
            <img src={Twitter} loading="lazy" alt="Twitter" />
          </a>
          <a
            href="https://facebook.com/MyQuidd"
            target="_blank"
            rel="noopener noreferrer"
            alt="Facebook"
          >
            <img src={Face} loading="lazy" alt="Facebook" />
          </a>
          <a
            href="https://instagram.com/myquidd"
            target="_blank"
            rel="noopener noreferrer"
            alt="Instagram"
          >
            <img src={Insta} loading="lazy" alt="Instagram" />
          </a>
        </ContainerIcons>
      </WrapRowContent>
    </Container>
  );
};

export default Foooter;

const Container = styled.footer`
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 5em 1.5em;
  background-color: #6b10d6;
  display: flex;
  flex-direction: column;
  align-items: center;

  .content1 {
    margin-bottom: 4em;
  }

  @media (max-width: 1000px) {
    .content1 {
      margin-bottom: 1em;
    }
    padding: 4em 1.5em 1em 1.5em;
  }
`;

const WrapRowContent = styled.div`
  width: 100%;
  display: flex;
  max-width: 1280px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const WrapContetnWithButtons = styled.div`
  h3 {
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    letter-spacing: 0.01em;
    margin-bottom: 17px;
  }
  h2 {
    font-weight: 700;
    font-size: 52px;
    color: #fff;
    letter-spacing: 0.01em;
  }
  @media (max-width: 1000px) {
    text-align: center;
    h2 {
      font-size: 40px;
    }
  }
`;

const ListLinks = styled.ul`
  @media (max-width: 1000px) {
    justify-content: center;
    grid-template-columns: initial;
    grid-gap: 0;
  }
  width: 105px;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 25px 25px 25px 25px;
  li {
    padding: 0.3em 0;
    margin-bottom: 0;
    a {
      color: #fff;
      cursor: pointer;
      text-decoration: none;
      font-size: 14px;
      color: #fff;
      letter-spacing: 0.01em;
      &:hover {
        color: #422662;
      }
    }
  }
`;

const Copyright = styled.div`
  font-size: 14px;
  float: left;
  color: #fff;
  letter-spacing: 0.01em;
  text-align: center;
`;

const ContainerIcons = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  a {
    cursor: pointer;
  }
  img {
    width: 20px;
    height: 20px;
  }
  @media (max-width: 1000px) {
    margin-top: 1.6em;
  }
`;
