import React from "react";
import styled from "styled-components";
import { Container } from "../UI";
import Card from "../Events/Card";
import Anchor from "../Anchor";

const Events = props => {
  return (
    <Anchor anchorId="events">
      <CustomContainer>
        <Title>Eventos</Title>
        <Grid>
          <Card />
          <Card />
          <Card />
        </Grid>
      </CustomContainer>
    </Anchor>
  );
};

export default Events;

const CustomContainer = styled(Container)`
  background: ${props => props.theme.color.black};
  min-height: 100vh;
  width: 100%;
  padding-bottom: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  padding: 0.5em 0;
  font-size: 4.5rem;
  color: ${props => props.theme.color.white};
  text-align: center;
  @media (max-width: ${props => props.theme.queries.sm}) {
    font-size: 3.5rem;
  }
`;

const Grid = styled.div`
  max-width: 1300px;
  padding: 0 1em;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 80px;
  @media (max-width: ${props => props.theme.queries.lg}) {
    grid-gap: 40px;
  }
  @media (max-width: ${props => props.theme.queries.md}) {
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${props => props.theme.queries.sm}) {
    grid-template-columns: 1fr;
  }
`;
