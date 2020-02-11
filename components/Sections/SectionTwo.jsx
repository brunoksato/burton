import React from "react";
import styled from "styled-components";

const SectionTwo = () => {
  return (
    <Container>
      <GridContent>
        <Gif
          src="https://imager-prod.onquidd.com/website/MoreFunThanIRL_Original_3.png"
          loading="lazy"
        />
        <WrapTexts>
          <div>
            <h2>
              More fun <br></br>
              than IRL.<br></br>
            </h2>
            <p>
              Collectibles, memorabilia, and art are going digital. <br />
              Own it in code, not paper or plastic.
            </p>
          </div>
        </WrapTexts>
      </GridContent>
      <GridContentTwo>
        <WrapTextsTwo>
          <h2>Buy and sell quickly.</h2>
          <p>
            Complete sets by shopping in our secondary market. <br />
            Over 6 transactions per second!
          </p>
        </WrapTextsTwo>
        <img
          src="https://imager-prod.onquidd.com/website/BuyAndSell_Original_3.png"
          loading="lazy"
        />
      </GridContentTwo>
    </Container>
  );
};

export default SectionTwo;

const Container = styled.section`
  background-color: #fff;
  padding: 5em 1em 0 1em;
  height: 100%;
`;

const GridContent = styled.div`
  max-width: 1280px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 29px;
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

  :first-child {
    justify-items: center;
    align-items: center;
  }
`;

const WrapTexts = styled.div`
  width: 387px;

  > div {
    width: 400px;
  }

  h2 {
    font-size: 54px;
    line-height: 50px;
    color: #6b10d6;
    margin-bottom: 10px;
    text-align: right;
    font-weight: bold;
    font-family: "LarsseitBold";
    margin-bottom: 0;
  }
  p {
    color: #545454;
    line-height: 1.2;
    text-align: right;
  }

  @media (max-width: 800px) {
    h2 {
      font-size: 1.6rem;
      line-height: 24px;
      text-align: left;
      br {
        display: none;
      }
    }
    p {
      text-align: left;
      font-size: 0.88rem;
      margin-top: 0.5rem;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    h2 {
      margin-right: 1.8em;
    }
  }

  @media (min-width: 1000px) {
    h2 {
      margin-right: 0;
    }
  }
`;

const Gif = styled.img`
  max-width: 500px;
  margin-left: 10%;
  @media (max-width: 1000px) {
    min-width: 400px;
  }
  @media (max-width: 600px) {
    min-height: 300px;
    max-height: 360px;
    margin: 0 auto;
    margin-left: -8%;
  }

  @media (max-width: 550px) {
    min-height: 300px;
    max-height: 360px;
    margin: 0 auto;
    margin-left: 0%;
  }

  @media (max-width: 475px) {
    min-width: 296px;
    min-height: 280px;
    width: 296px;
    height: 280px;
    margin: 0 auto;
    margin-left: 0%;
  }

  @media (max-width: 450px) {
    min-width: 296px;
    min-height: 280px;
    width: 296px;
    height: 280px;
    margin: 0 auto;
    margin-left: 10%;
  }

  @media (max-width: 400px) {
    min-width: 296px;
    min-height: 280px;
    width: 296px;
    height: 280px;
    margin: 0 auto;
    margin-left: 4%;
  }

  @media (max-width: 330px) {
    min-width: 296px;
    min-height: 280px;
    width: 296px;
    height: 280px;
    margin: 0 auto;
    margin-left: 0;
  }
`;
//content two

const GridContentTwo = styled(GridContent)`
  margin-top: 3em;
  align-items: center;

  :last-child {
    justify-items: center;
  }

  @media (max-width: 800px) {
    margin-top: 3em;
    display: flex;
    flex-direction: column;
  }

  img {
    margin-bottom: -2em;
    margin-left: 28%;
    margin-right: -37px;
    max-width: 500px;
    max-height: 450px;
    @media (max-width: 768px) {
      margin-top: 0;
      margin-bottom: 0;
      min-height: 372px;
      max-height: 400px;
      margin-right: 0;
      margin-left: 0;
    }

    @media (max-width: 425px) {
      margin-top: 0;
      margin-bottom: 0;
      min-height: 332px;
      max-height: 360px;
      margin-right: 0;
      margin-left: 0;
    }
  }
`;

const WrapTextsTwo = styled(WrapTexts)`
  padding-right: 1em;
  p {
    line-height: 1.2;
    text-align: left;
  }
  h2 {
    font-size: 54px;
    font-weight: bold;
    font-family: "LarsseitBold";
    text-align: left;
  }
  @media (min-width: 2000px) {
    /* width: 600px; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h2 {
      margin-right: 0;
      font-family: "LarsseitBold";
    }
  }
  @media (max-width: 800px) {
    h2 {
      margin-right: 0em;
      font-family: "LarsseitBold";
      font-size: 1.6rem;
      line-height: 24px;
    }
    p {
      font-size: 0.88rem;
      margin-top: 0.5rem;
    }
  }
`;
