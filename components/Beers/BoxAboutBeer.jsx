import React from "react";
import styled from "styled-components";
import { Container } from "../UI";

const BoxAboutBeer = props => {
  return (
    <WrapperAboutBeer>
      <Container width={280} display="flex" flexDirection="column" alignItems="center">
        <TextInfoBeer>
          Cerveja de cor dourada, com notas cítricas e lúpulos americanos.
        </TextInfoBeer>
      </Container>
    </WrapperAboutBeer>
  );
};

export default BoxAboutBeer;

const WrapperAboutBeer = styled.div`
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 35%;
  left: 300px;
  /* @media (max-width: 1600px) {
    right:19%;
  } 
  @media (max-width: 1300px) {
    right:13%;
  }  */
`;

const TextInfoBeer = styled.h2`
  color: ${props => props.theme.color.white};
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 2px;
  line-height: 1.5;
  text-transform: uppercase;
  text-align: left;
  @media (max-width: ${props => props.theme.queries.lg}) {
    font-size: 0rem;
  }
`;
