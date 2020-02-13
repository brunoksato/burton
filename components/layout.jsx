import React from "react";
import styled from "styled-components";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <>
    <Container>
      <main>{children}</main>
    </Container>
    {/* <Footer /> */}
  </>
);
export default Layout;

const Container = styled.div`
  font-family: Helvetica, Arial, sans-serif;
`;
