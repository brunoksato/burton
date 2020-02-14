import React from "react";
import styled from "styled-components";
import Carousel from "re-carousel";

import { Container } from "../UI";
import ContainerGradient from "../Beers/ContainerGradient";
import IndicatorDots from "../Beers/IndicatorDots";
import ButtonsSlide from "../Beers/ButtonsSlide";

const Beers = () => {
  return (
    <CustomContainer id="beer-section">
      <Carousel widgets={[IndicatorDots, ButtonsSlide]}>
        <ContainerGradient beerName="Ipa" beerImg={"/images/beer.png"} />
        <ContainerGradient beerName="Blonde ale" beerImg={"/images/beer.png"} />
        <ContainerGradient beerName="Black ipa" beerImg={"/images/beer.png"} />
        <ContainerGradient beerName="Witbier" beerImg={"/images/beer.png"} />
        <ContainerGradient beerName="Session ipa" beerImg={"/images/beer.png"} />
        <ContainerGradient beerName="pilsen" beerImg={"/images/beer.png"} />
      </Carousel>
    </CustomContainer>
  );
};

export default Beers;

const CustomContainer = styled(Container)`
  height: 100vh;
`;
