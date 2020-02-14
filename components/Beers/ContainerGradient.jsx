import React from "react";
import styled from "styled-components";

import { Container } from "../UI";
import BoxInfoBeer from "../Beers/BoxInfoBeer";
import BoxAboutBeer from "../Beers/BoxAboutBeer";

const ContainerGradient = props => {
  return (
    <Gradient>
      <CenterText>
        <h1>{props.beerName}</h1>
      </CenterText>
      <CenterBeer>
        <ImageBeer
          src={props.beerImg}
          loading="lazy"
          alt={`burton-cerveja-artesanal-${props.beerName}`}
        />
        <TextBottomBeer>
          Made with the finest <br /> <b>two-row barley</b>
        </TextBottomBeer>
      </CenterBeer>
      <BoxInfoBeer />
      <BoxAboutBeer />
    </Gradient>
  );
};

export default ContainerGradient;

const Gradient = styled.div`
  background: ${props => props.theme.color.black};
  height: 100vh;
  border: 1px solid ${props => props.theme.color.black};
`;

const CenterText = styled.div`
  color: ${props => props.theme.color.white};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 100;
  height: 100vh;
  h1 {
    transition: 0.5s;
    font-size: 6rem;
    letter-spacing: 15px;
  }
  @media (min-width: ${props => props.theme.queries.lg}) {
    h1 {
      margin-top: 0.2em;
      font-size: 9rem;
    }
  }
  @media (max-width: ${props => props.theme.queries.md}) {
    align-items: flex-start;
    justify-content: center;
    h1 {
      font-size: 4rem;
      margin-top: 0.5em;
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media (max-width: ${props => props.theme.queries.sm}) {
    h1 {
      margin-top: 1em;
      font-size: 1.5rem;
    }
  }
`;

const CenterBeer = styled.div`
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 10;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  transition: 0.5s;
  @media (max-width: ${props => props.theme.queries.md}) {
    height: 100%;
  }
`;

const TextBottomBeer = styled.h2`
  color: ${props => props.theme.color.white};
  text-transform: uppercase;
  text-align: center;
  line-height: 1.5;
  font-weight: 300;
  font-size: 1.3rem;
  letter-spacing: 3px;
  transition: 0.5s;
  @media (max-width: ${props => props.theme.queries.lg}) {
    font-size: 0;
  }
`;

const ImageBeer = styled.img`
  transition: 0.5s;
  max-height: 60%;
  margin-top: 9em;
  @media (max-width: ${props => props.theme.queries.xl}) {
    margin-top: 9em;
  }
  @media (max-width: ${props => props.theme.queries.lg}) {
    margin-top: -7em;
  }
`;
