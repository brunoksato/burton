import React from "react";
import styled from "styled-components";

import BoxInfoBeer from "../Beers/BoxInfoBeer";
import BoxAboutBeer from "../Beers/BoxAboutBeer";

const ContainerGradient = props => {
  return (
    <Gradient>
      <Container>
        <InfoBeer>
          <div>
            <Title>
              <h1>{props.beerName}</h1>
            </Title>
            <BoxAboutBeer />
          </div>
          <BoxInfoBeer />
          <TextBottomBeer>
            Made with the finest <br /> <b>two-row barley</b>
          </TextBottomBeer>
        </InfoBeer>
        <ImageBeer
          src={props.beerImg}
          loading="lazy"
          alt={`burton-cerveja-artesanal-${props.beerName}`}
        />
      </Container>
    </Gradient>
  );
};

export default ContainerGradient;

const Gradient = styled.div`
  background: ${props => props.theme.color.black};
  min-height: 100%;
  border: 1px solid ${props => props.theme.color.black};
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${props => props.theme.queries.xl}) {
    padding: 0 2em;
  }
  @media (max-width: ${props => props.theme.queries.md}) {
    flex-direction: column-reverse;
    padding: 0 1em;
  }
`;

const Title = styled.div`
  color: ${props => props.theme.color.white};
  z-index: 100;
  margin-bottom: 1em;
  h1 {
    font-size: 2.5rem;
  }
  @media (max-width: ${props => props.theme.queries.md}) {
    margin-bottom: 0.5em;

    h1 {
      font-size: 2rem;
    }
  }
`;

const InfoBeer = styled.div`
  width: 50%;
  @media (max-width: ${props => props.theme.queries.md}) {
    width: 100%;
  }
`;

const TextBottomBeer = styled.h2`
  color: ${props => props.theme.color.white};
  text-transform: uppercase;
  text-align: left;
  line-height: 1.5;
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: 3px;
  transition: 0.5s;
  margin-bottom: 0;
  @media (max-width: ${props => props.theme.queries.md}) {
    font-size: 0;
  }
`;

const ImageBeer = styled.img`
  transition: 0.5s;
  max-width: 60%;
  @media (max-width: ${props => props.theme.queries.md}) {
    max-width: 70%;
  }
  @media (max-width: ${props => props.theme.queries.sm}) {
    width: 85%;
  }
`;
