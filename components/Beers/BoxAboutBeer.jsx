import React from "react";
import styled from "styled-components";
import { Container } from "../UI";

const BoxAboutBeer = props => {
  return (
    <NewContainer width={280} display="flex" flexDirection="column" alignItems="center">
      <TextInfoBeer>Cerveja de cor dourada, com notas cítricas e lúpulos americanos.</TextInfoBeer>
    </NewContainer>
  );
};

export default BoxAboutBeer;

const NewContainer = styled(Container)`
  transition: 0.5s;
  @media (max-width: ${props => props.theme.queries.md}) {
    width: 0;
    h2 {
      font-size: 0;
    }
  }
`;

const TextInfoBeer = styled.h2`
  color: lightgray;
  font-size: 0.75rem;
  font-weight: 300;
  letter-spacing: 2px;
  line-height: 1.5;
  text-transform: uppercase;
  text-align: left;
`;
