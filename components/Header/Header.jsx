import React from "react";
import styled from "styled-components";

import { Container } from "../UI";
import Navigation from "./Navigation";

const Header = props => {
  return (
    <Wrap>
      <Navigation showMenu={props.showMenu} />
      <ContainerContent display="flex" flexDirection="column">
        <PrincipalText>
          Cervejas
          <br /> Artesanais
        </PrincipalText>
        <SecondaryText>
          Cervejas 100% artesanais produzidas em São José dos Campos - SP
        </SecondaryText>
        {/* <OutlineBtn onClick={props.handleButton}>About Company</OutlineBtn> */}
      </ContainerContent>
    </Wrap>
  );
};

export default Header;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.color.black};
  background-repeat: no-repeat;
  min-height: 100vh;
  overflow: hidden;
  background-image: url("images/beer-no-bg.png");
  background-position-y: 10%;
  background-position-x: 83%;
  background-size: cover;
`;

//START center content
const ContainerContent = styled(Container)`
  padding: 0 1em;
  margin-left: 15%;
  margin-top: 5%;
  transition: 0.5s;
  @media (max-width: ${props => props.theme.queries.lg}) {
    margin-top: 40%;
    margin-left: 5%;
  }
  @media (max-width: ${props => props.theme.queries.md}) {
    margin-top: 50%;
    margin-left: 3%;
    transition: 0.5s;
    padding: 0 1em;
  }
  @media (max-width: ${props => props.theme.queries.sm}) {
    margin-left: 2%;
    margin-top: 330px;
  }
  @media (max-width: 375px) and (max-height: 812px) {
    margin-top: 400px;
  }
  @media (max-width: 375px) and (max-height: 667px) {
    margin-top: 300px;
  }
  @media (max-width: 360px) and (max-height: 640px) {
    margin-top: 280px;
  }
  @media (max-width: ${props => props.theme.queries.i5}) {
    margin-top: 200px;
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
  @media (max-width: ${props => props.theme.queries.sm}) {
    font-size: 2.8rem;
  }
`;

const SecondaryText = styled.p`
  margin-top: 1em;
  max-width: 700px;
  font-size: 0.9rem;
  font-weight: 600;
  opacity: 0.8;
  color: ${props => props.theme.color.white};
  @media (max-width: ${props => props.theme.queries.md}) {
    max-width: 490px;
  }
  @media (max-width: ${props => props.theme.queries.sm}) {
    color: ${props => props.theme.color.white};
    max-width: 280px;
  }
  @media (max-width: ${props => props.theme.queries.i5}) {
    max-width: 230px;
  }
`;

const OutlineBtn = styled.button`
  color: ${props => props.theme.color.white};
  padding: 0.4em 0.8em;
  max-width: 180px;
  font-weight: 600;
  background: transparent;
  font-size: 0.9rem;
  border-radius: 1.3em;
  border: 2px solid ${props => props.theme.color.white};
  cursor: pointer;
  outline: none;
  transition: 0.2s;
  :hover {
    /* opacity: 0.7; */
    color: ${props => props.theme.color.black};
    border-color: ${props => props.theme.color.black};
  }
  @media (max-width: ${props => props.theme.queries.sm}) {
    color: ${props => props.theme.color.white};
    border-color: ${props => props.theme.color.white};
  }
`;

//END center content
