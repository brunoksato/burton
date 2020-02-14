import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Carousel from "../../utils/carousel";

import { Container } from "../UI";
import ContainerGradient from "../Beers/ContainerGradient";
import IndicatorDots from "../Beers/IndicatorDots";
import ButtonsSlide from "../Beers/ButtonsSlide";

const Beers = () => {
  const [current, setCurrent] = useState(0);

  const arrBeers = [
    <ContainerGradient beerName="Ipa" beerImg={"/images/beer.png"} />,
    <ContainerGradient beerName="Blonde ale" beerImg={"/images/beer.png"} />,
    <ContainerGradient beerName="Black ipa" beerImg={"/images/beer.png"} />,
    <ContainerGradient beerName="Witbier" beerImg={"/images/beer.png"} />,
    <ContainerGradient beerName="Session ipa" beerImg={"/images/beer.png"} />,
    <ContainerGradient beerName="pilsen" beerImg={"/images/beer.png"} />
  ];

  const frames = arrBeers.map((frame, i) => {
    return frame;
  });

  return (
    <CustomContainer id="beer-section">
      <Carousel
        currentFrameIndex={current}
        frames={frames}
        duration={600}
        widgets={[IndicatorDots, ButtonsSlide]}
      />
    </CustomContainer>
  );
};

export default Beers;

const CustomContainer = styled(Container)`
  height: 100vh;
`;
