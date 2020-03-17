import React from "react";
import styled from "styled-components";
import { Container } from "../UI";

const BoxInfoBeer = props => {
  return (
    <WrapperInfoBeer display="flex">
      <ContainerInfoBeer>
        <NewContainer display="flex" flexDirection="column">
          <Container
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            marginBottom={20}
          >
            <TextLabelBeer>Álcool</TextLabelBeer>
            <TextInfoBeer>{props.alcohol}</TextInfoBeer>
          </Container>
          <Container
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            marginBottom={20}
          >
            <TextLabelBeer>IBU</TextLabelBeer>
            <TextInfoBeer>{props.ibu}</TextInfoBeer>
          </Container>
        </NewContainer>
        <Container display="flex" flexDirection="column" alignItems="flex-start">
          <TextLabelBeer>ingredientes</TextLabelBeer>
          <TextInfoBeer>{props.ingredient}</TextInfoBeer>
        </Container>
      </ContainerInfoBeer>
      <Btn>Button</Btn>
    </WrapperInfoBeer>
  );
};

export default BoxInfoBeer;

const WrapperInfoBeer = styled.div`
  width: 100%;
  margin: 1em 0 3em 0;
  border: 1px solid ${props => props.theme.color.lightGray};
  @media (min-width: ${props => props.theme.queries.lg}) {
    max-width: 350px;
  }
  @media (max-width: ${props => props.theme.queries.md}) {
    margin: 1em 0 1em 0;
  }
`;

const ContainerInfoBeer = styled.div`
  padding: 2em;
  @media (max-width: ${props => props.theme.queries.md}) {
    padding: 1em;
  }
`;

const TextLabelBeer = styled.div`
  color: ${props => props.theme.color.gray};
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const TextInfoBeer = styled.div`
  color: ${props => props.theme.color.white};
  font-size: 0.9rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: left;
  max-width: 270px;
`;

const Btn = styled.div`
  border-top: 1px solid ${props => props.theme.color.lightGray};
  padding: 1em 2em;
  text-align: center;
  color: ${props => props.theme.color.white};
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const NewContainer = styled(Container)`
  @media (max-width: ${props => props.theme.queries.md}) {
    flex-direction: row !important;
    justify-content: space-between;
  }
`;
