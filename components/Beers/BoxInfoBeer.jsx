import React from "react";
import styled from "styled-components";
import { Container } from "../UI";

const BoxInfoBeer = props => {
  return (
    <WrapperInfoBeer display="flex">
      <ContainerInfoBeer>
        <Container display="flex" justifyContent="space-between" marginBottom={15}>
          <Container display="flex" flexDirection="column" alignItems="center">
            <TextLabelBeer>Álcool</TextLabelBeer>
            <TextInfoBeer>4.5%</TextInfoBeer>
          </Container>
          <Container display="flex" flexDirection="column" alignItems="center">
            <TextLabelBeer>IBU</TextLabelBeer>
            <TextInfoBeer>média</TextInfoBeer>
          </Container>
        </Container>
        <Container display="flex" flexDirection="column" alignItems="center">
          <TextLabelBeer>ingredientes</TextLabelBeer>
          <TextInfoBeer>Barley Malt, Rice, wheat malt, hops and yeast</TextInfoBeer>
        </Container>
      </ContainerInfoBeer>
    </WrapperInfoBeer>
  );
};

export default BoxInfoBeer;

const WrapperInfoBeer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 18%;
  right: 480px;
  @media (max-width: 1310px) {
    right: 350px;
  }
  @media (max-width: ${props => props.theme.queries.md}) {
    justify-content: center;
    bottom: 2%;
    right: 0;
  }
  @media (max-width: ${props => props.theme.queries.lg}) {
    justify-content: center;
    bottom: 0;
    right: 0;
  }
`;

const ContainerInfoBeer = styled.div`
  z-index: 10;
  height: 200px;
  width: 300px;
`;

const TextLabelBeer = styled.div`
  color: ${props => props.theme.color.white};
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const TextInfoBeer = styled.div`
  color: ${props => props.theme.color.gray};
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  max-width: 270px;
`;
