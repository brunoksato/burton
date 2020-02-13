import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Menu from "../../public/logo/menu-white.svg";

const Navigation = props => {
  return (
    <HeaderTop>
      <Link href="/">
        <h1>Burton</h1>
        {/* <img className="logotype" loading="lazy" src={Logo} alt="logo" /> */}
      </Link>
      <NavLinks>
        <a>Início</a>
        <a>Cervejas</a>
        <a>Onde estamos</a>
        <a>contato</a>
        <img src={Menu} />
      </NavLinks>
    </HeaderTop>
  );
};

export default Navigation;

const HeaderTop = styled.div`
  padding: 1em 2em;
  height: 110px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.color.white};
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    text-transform: uppercase;
    cursor: pointer;
    color: ${props => props.theme.color.white};
    text-decoration: none;
    font-size: 0.8rem;
    margin-left: 3rem;
    :hover {
      opacity: 0.8;
    }
    :first-child {
      margin-left: 0rem;
    }
  }
  img {
    width: 0;
    transition: 0.5s;
  }
  @media (min-width: ${props => props.theme.queries.xl}) {
    width: 100%;
    max-width: 600px;
  }
  @media (min-width: ${props => props.theme.queries.xl}) {
    width: 100%;
    max-width: 600px;
  }
  @media (min-width: 1600px) {
    width: 100%;
    max-width: 900px;
  }
  @media (max-width: ${props => props.theme.queries.md}) {
    a {
      display: none;
    }
    img {
      width: 30px;
      cursor: pointer;
      transition: 0.5s;
    }
  }
`;
