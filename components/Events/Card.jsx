import React from "react";
import styled from "styled-components";
import { Container } from "../UI";

const Card = props => {
  return (
    <Wrap>
      <img draggable="false" src={props.item.image} />
      <Container paddingX={20} paddingTop={20}>
        <TitleCard>{props.item.title}</TitleCard>
        <CardDate>{props.item.date}</CardDate>
        <CardText>
         {props.item.description}
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
