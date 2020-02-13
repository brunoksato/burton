import React from "react";
import styled from "styled-components";

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
      </CenterBeer>
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
  align-items: center;
  justify-content: center;
  z-index: 100;
  height: 100vh;
  h1 {
    transition: 0.5s;
    margin-top: -1.2em;
    font-size: 6rem;
    letter-spacing: 15px;
  }
  @media (min-width: ${props => props.theme.queries.lg}) {
    h1 {
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
  @media (max-width: 480px) {
    h1 {
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
  z-index: 10;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  transition: 0.5s;
  @media (max-width: ${props => props.theme.queries.md}) {
    top: 100px;
    align-items: flex-start;
  }
  @media (max-width: 480px) {
    top: 50px;
  }
`;

const ImageBeer = styled.img`
  transition: 0.5s;
  max-height: 80%;
  @media (max-width: ${props => props.theme.queries.xl}) {
    max-height: 60%;
  }
`;
