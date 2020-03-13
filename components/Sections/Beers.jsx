import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Carousel from "../../utils/carousel";

import { Container } from "../UI";
import ContainerGradient from "../Beers/ContainerGradient";
import IndicatorDots from "../Beers/IndicatorDots";
import ButtonsSlide from "../Beers/ButtonsSlide";
import Anchor from "../Anchor";

const Beers = () => {
  const [current, setCurrent] = useState(0);

  const arrBeers = [
    <ContainerGradient beerName="Ipa" beerImg={"/images/beers/ipa-no-bg.png"} />,
    <ContainerGradient beerName="Blonde ale" beerImg={"/images/beers/blond-ale-no-bg.png"} />,
    <ContainerGradient beerName="Black ipa" beerImg={"/images/beers/black-ipa-no-bg.png"} />,
    <ContainerGradient beerName="Witbier" beerImg={"/images/beers/witbier-no-bg.png"} />,
    <ContainerGradient beerName="Session ipa" beerImg={"/images/beers/session-ipa-no-bg.png"} />,
    <ContainerGradient beerName="Pale Ale" beerImg={"/images/beers/pale-ale-no-bg.png"} />,
    <ContainerGradient beerName="Pilsen" beerImg={"/images/beers/pilsen-no-bg.png"} />
  ];

  const frames = arrBeers.map((frame, i) => {
    return frame;
  });

  return (
    <Anchor anchorId="beers">
      <CustomContainer id="beer-section">
        <Carousel
          currentFrameIndex={current}
          frames={frames}
          duration={600}
          widgets={[IndicatorDots, ButtonsSlide]}
        />
      </CustomContainer>
    </Anchor>
  );
};

export default Beers;

const CustomContainer = styled(Container)`
  height: 100vh;
  @media(max-width:${props => props.theme.queries.sm}){
    height: 115vh;
  }
  @media(max-width:${props => props.theme.queries.i5}){
    height: 130vh;
  }
`;
