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
    <ContainerGradient
      beerName="Ipa"
      description="Cerveja Puro malte, com ingredientes selecionados que trazem uma explosão de aromas e sabores provindos dos lúpulos americanos."
      beerImg={"/images/beers/ipa-no-bg.png"}
      alcohol={"5.9%"}
      ibu={"43"}
      ingredient={"Malte de cevada, lúpulo e levedura."}
    />,
    <ContainerGradient
      beerName="Pilsen"
      description="Cerveja Puro malte leve com ingredientes selecionados que trazem um sutil sabor maltado que reme a pão fresco e aroma floral e herbal provindo dos lúpulos alemães."
      beerImg={"/images/beers/pilsen-no-bg.png"}
      alcohol={"5.0%"}
      ibu={"10"}
      ingredient={"Malte de cevada, lúpulo e levedura."}
    />,
    <ContainerGradient
      beerName="Blonde ale"
      description="CERVEJA DE COR DOURADA, COM NOTAS CÍTRICAS E LÚPULOS AMERICANOS."
      beerImg={"/images/beers/blond-ale-no-bg.png"}
      alcohol={"4.7%"}
      ibu={"16"}
      ingredient={"Malte de cevada, lúpulo e levedura."}
    />,
    <ContainerGradient
      beerName="Pale Ale"
      description="CERVEJA DE COLORAÇÃO AMARELA E ASPECTO TURVO, LEVEMENTE FRUTADA."
      beerImg={"/images/beers/pale-ale-no-bg.png"}
      alcohol={"5.0%"}
      ibu={"10"}
      ingredient={"Malte de cevada, lúpulo e levedura."}
    />,
    <ContainerGradient
      beerName="Witbier"
      description="CERVEJA DE COLORAÇÃO AMARELA E ASPECTO TURVO, COM NOTAS CÍTRICAS E CONDIMENTADAS."
      beerImg={"/images/beers/witbier-no-bg.png"}
      alcohol={"4.7%"}
      ibu={"11"}
      ingredient={"Malte de cevada, lúpulo, trigo e levedura."}
    />,
    <ContainerGradient
      beerName="Session ipa"
      description="CERVEJA DE COLORAÇÃO AMARELA, COM NOTAS CÍTRICAS E LÚPULOS AUSTRALIANO."
      beerImg={"/images/beers/session-ipa-no-bg.png"}
      alcohol={"4.8%"}
      ibu={"35"}
      ingredient={"Malte de cevada, lúpulo e levedura."}
    />,
    <ContainerGradient
      beerName="Black ipa"
      description="CERVEJA ESCURA, ROBUSTA, LUPULADA COM UM AMARGOR QUE PERSISTE."
      beerImg={"/images/beers/black-ipa-no-bg.png"}
      alcohol={"6.8%"}
      ibu={"45"}
      ingredient={"Malte de cevada, lúpulo e levedura."}
    />
  ];

  const frames = arrBeers.map((frame, i) => {
    return frame;
  });

  return (
    <Anchor anchorId="beers" id="beers">
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
  @media (max-width: ${props => props.theme.queries.sm}) {
    height: 125vh;
  }
  @media (max-width: ${props => props.theme.queries.i5}) {
    height: 130vh;
  }
`;
