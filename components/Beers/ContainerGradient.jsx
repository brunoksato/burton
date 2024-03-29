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
            <BoxAboutBeer description={props.description} />
          </div>
          <BoxInfoBeer alcohol={props.alcohol} ibu={props.ibu} ingredient={props.ingredient} />
          <TextBottomBeer>
            Feito com os melhores <b>Maltes</b> e <b>Lúpulos</b>
          </TextBottomBeer>
        </InfoBeer>
        <ImageBeer
          draggable="false"
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
  margin-top: 1em;
  margin-bottom: 1em;
  h1 {
    font-size: 3rem;
  }
  @media (max-width: ${props => props.theme.queries.md}) {
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    h1 {
      font-size: 2rem;
    }
  }
`;

const InfoBeer = styled.div`
  /* width: 50%; */
  min-width: 350px;
  @media (max-width: ${props => props.theme.queries.md}) {
    min-width: 100;
    width: 100%;
  }
  @media (max-width: ${props => props.theme.queries.sm}) {
    min-width: 100%;
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
  margin-top: 5em;
  max-width: 90%;
  @media (max-width: ${props => props.theme.queries.md}) {
    max-width: 120%;
  }
  @media (max-width: ${props => props.theme.queries.sm}) {
    max-width: 180%;
    margin-top: 0em;
  }
`;
