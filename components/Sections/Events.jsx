import React from "react";
import styled from "styled-components";
import { Container } from "../UI";
import Card from "../Events/Card";
import Anchor from "../Anchor";

const Events = props => {
  const eventsJson = [
    // {
    //   image: "https://midias.gazetaonline.com.br/_midias/jpg/2017/06/08/18948916_1314702505314744_301322469_o-5141114.jpg",
    //   title: "Feira de Cervejas Artesanais",
    //   date: "20 de Março, 2019",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada nunc vel risus commodo viverra maecenas. Viverra suspendisse potenti nullam ac tortor. Odio ut enim blandit volutpat maecenas volutpat blandit. Diam vulputate ut pharetra sit amet aliquam id diam maecenas."
    // },
    // {
    //   image: "https://midias.gazetaonline.com.br/_midias/jpg/2017/06/08/18948916_1314702505314744_301322469_o-5141114.jpg",
    //   title: "Feira de Cervejas Artesanais",
    //   date: "20 de Março, 2019",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada nunc vel risus commodo viverra maecenas. Viverra suspendisse potenti nullam ac tortor. Odio ut enim blandit volutpat maecenas volutpat blandit. Diam vulputate ut pharetra sit amet aliquam id diam maecenas."
    // },
    // {
    //   image: "https://midias.gazetaonline.com.br/_midias/jpg/2017/06/08/18948916_1314702505314744_301322469_o-5141114.jpg",
    //   title: "Feira de Cervejas Artesanais",
    //   date: "20 de Março, 2019",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada nunc vel risus commodo viverra maecenas. Viverra suspendisse potenti nullam ac tortor. Odio ut enim blandit volutpat maecenas volutpat blandit. Diam vulputate ut pharetra sit amet aliquam id diam maecenas."
    // }
  ];

  return (
    <Anchor anchorId="events" id="events">
      <CustomContainer>
        <Title>Eventos</Title>
        {eventsJson && eventsJson.length === 3 ? (
          <Grid>
            {eventsJson.map((item, idx) => (
              <Card key={idx} item={item} />
            ))}
          </Grid>
        ) : eventsJson && eventsJson.length === 2 ? (
          <Grid>
            {eventsJson.map((item, idx) => (
              <Card key={idx} item={item} />
            ))}
            <Container
              paddingX={20}
              display="flex"
              marginTop={100}
              marginBottom={100}
              alignItems="center"
            >
              <h1 style={{ color: "#fff", textAlign: "center" }}>mais eventos em breve.</h1>
            </Container>
          </Grid>
        ) : eventsJson && eventsJson.length === 1 ? (
          <Grid>
            {eventsJson.map((item, idx) => (
              <Card key={idx} item={item} />
            ))}
            <Container
              marginTop={100}
              paddingX={20}
              marginBottom={100}
              display="flex"
              alignItems="center"
            >
              <h1 style={{ color: "#fff", textAlign: "center" }}>mais eventos em breve.</h1>
            </Container>
          </Grid>
        ) : (
          eventsJson &&
          eventsJson.length === 0 && (
            <NoEvents
              marginTop={100}
              paddingX={20}
              marginBottom={100}
              display="flex"
              alignItems="center"
            >
              <h1 style={{ color: "#fff", textAlign: "center" }}>mais eventos em breve.</h1>
            </NoEvents>
          )
        )}
      </CustomContainer>
    </Anchor>
  );
};

export default Events;

const CustomContainer = styled(Container)`
  background: ${props => props.theme.color.black};
  min-height: 100vh;
  width: 100%;
  padding: 2em 0;
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
    font-size: 3rem;
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

const NoEvents = styled(Container)`
  height: 500px;
  @media (max-width: ${props => props.theme.queries.md}) {
    height: 200px;
  }
`;
