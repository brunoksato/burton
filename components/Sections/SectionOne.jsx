import React from "react";
import styled from "styled-components";

const SectionOne = () => {
  return (
    <Container>
      <GridContentTwo>
        <WrapTexts>
          <h2>
            Largest.<br></br>
            Catalog.<br></br>
            Ever.
          </h2>
          <p>
            Discover over 2.1B one-of-a-kind collectibles from your favorite brands. <br /> New
            drops everyday.
          </p>
        </WrapTexts>
        <img
          src="https://imager-prod.onquidd.com/website/LargestCatalogEver_Original.png"
          loading="lazy"
        />
      </GridContentTwo>
    </Container>
  );
};

export default SectionOne;

const Container = styled.section`
  background-color: #fff;
  padding: 4em 1em 0 1em;

  @media (max-width: 500px) {
    padding: 0em 1em;
  }
`;

const GridContent = styled.div`
  max-width: 1280px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-top: 5em;
  @media (min-width: 2000px) {
    padding-left: 0;
  }
  margin: 0 auto;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 800px) {
    margin-top: 0;
    display: flex;
    flex-direction: column-reverse;
  }
`;

const GridContentTwo = styled(GridContent)`
  margin-top: 1em;
  align-items: flex-end;

  :last-child {
    justify-items: center;
    align-items: center;
  }

  @media (max-width: 800px) {
    margin-top: 5em;
    display: flex;
    flex-direction: column;
  }

  img {
    max-width: 600px;
    max-height: 500px;
    @media (max-width: 600px) {
      margin-top: 0;
      max-width: 100%;
      max-height: 100%;
      margin-bottom: 0;
    }
  }
`;

const WrapTexts = styled.div`
  width: 387px;
  h2 {
    font-size: 52px;
    line-height: 52px;
    color: #6b10d6;
    margin-bottom: 10px;
    font-weight: 700;
    text-align: left;
    font-family: "LarsseitBold";
    margin-bottom: 0;
  }
  p {
    color: #545454;
    line-height: 1.2;
  }

  @media (max-width: 800px) {
    h2 {
      font-size: 1.6rem;
      line-height: 24px;
    }
    p {
      font-size: 0.88rem;
      margin-top: 0.5rem;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
