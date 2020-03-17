import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Anchor from "./Anchor";
import Head from "next/head";

const Layout = props => (
  <>
    <Head>
      <link rel="shortcut icon" href="icons/dog.png" />
    </Head>
    <Container>
      <main>{props.children}</main>
    </Container>
    <Anchor anchorId="footer">
      <Footer id="footer" />
    </Anchor>
  </>
);
export default Layout;

const Container = styled.div`
  font-family: Helvetica, Arial, sans-serif;
`;
