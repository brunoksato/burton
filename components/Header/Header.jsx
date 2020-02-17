import React from "react";
import styled from "styled-components";

import { Container } from "../UI";
import Navigation from "./Navigation";

const Header = props => {
  return (
    <Wrap>
      <Navigation />
      <ContainerContent display="flex" flexDirection="column">
        <PrincipalText>
          Craft
          <br /> Brewery
        </PrincipalText>
        <SecondaryText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Enim nunc faucibus a pellentesque sit amet porttitor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </SecondaryText>
        <OutlineBtn onClick={props.handleButton}>About Company</OutlineBtn>
      </ContainerContent>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.color.black};
  height: 100vh;
  overflow: hidden;
`;

//START center content
const ContainerContent = styled(Container)`
  padding: 0 1em;
  margin-left: 15%;
  margin-top: 170px;
  transition: 0.5s;
  @media (max-width: ${props => props.theme.queries.md}) {
    margin-left: 0%;
    transition: 0.5s;
    padding: 0 2em;
  }
  @media (max-width: ${props => props.theme.queries.sm}) {
    margin-top: 50px;
  }
`;

const PrincipalText = styled.h1`
  font-size: 4.5rem;
  color: ${props => props.theme.color.white};
  text-transform: uppercase;
  font-weight: 600;
  @media (max-width: ${props => props.theme.queries.md}) {
    font-size: 3.8rem;
  }
`;

const SecondaryText = styled.p`
  margin-top: 1em;
  max-width: 700px;
  font-size: 0.9rem;
  color: ${props => props.theme.color.white};
`;

const OutlineBtn = styled.button`
  color: ${props => props.theme.color.white};
  padding: 0.4em 0.8em;
  max-width: 180px;
  background: transparent;
  font-size: 0.9rem;
  border-radius: 1.3em;
  border: 1px solid ${props => props.theme.color.white};
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 0.8;
  }
`;

//END center content
