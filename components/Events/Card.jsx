import React from "react";
import styled from "styled-components";
import { Container } from "../UI";

const Card = props => {
  return (
    <Wrap>
      <img src="https://midias.gazetaonline.com.br/_midias/jpg/2017/06/08/18948916_1314702505314744_301322469_o-5141114.jpg" />
      <Container paddingX={20} paddingTop={20}>
        <TitleCard>Feira de cervejas artesanais em São José dos Campos</TitleCard>
        <CardDate>20 de Março,2019</CardDate>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Malesuada nunc vel risus commodo viverra maecenas.
          Viverra suspendisse potenti nullam ac tortor. Odio ut enim blandit volutpat maecenas
          volutpat blandit. Diam vulputate ut pharetra sit amet aliquam id diam maecenas.
        </CardText>
      </Container>
    </Wrap>
  );
};

export default Card;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid ${props => props.theme.color.lightGray};
  min-height: 500px;
  img {
    max-width: 100%;
  }
`;

const TitleCard = styled.h2`
  color: ${props => props.theme.color.white};
  margin-bottom: 0.7em;
  letter-spacing: 2px;
  font-size: 1.3rem;
`;

const CardDate = styled.h3`
  color: ${props => props.theme.color.white};
  margin-bottom: 0.7em;
  letter-spacing: 2px;
  font-size: 0.9rem;
`;

const CardText = styled.div`
  color: ${props => props.theme.color.gray};
  margin-bottom: 0.7em;
  letter-spacing: 2px;
  font-size: 0.9rem;
`;
