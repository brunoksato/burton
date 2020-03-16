import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import Menu from "../../public/logo/menu-white.svg";
import StateManagerContext from "../../state/context/createContext";
import MenuMobile from "../MenuMobile";

const Navigation = props => {
  const { anchors } = useContext(StateManagerContext);

  const handleScrollTo = anchorRef => () => {
    const current = anchorRef?.current;
    if (!!current) {
      const top = window.pageYOffset + current?.getBoundingClientRect?.()?.top;
      if (top !== undefined) {
        window.scroll({
          top,
          left: 0,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <HeaderTop>
      <Link href="/">
        <h1>Burton</h1>
        {/* <img className="logotype" loading="lazy" src={Logo} alt="logo" /> */}
      </Link>
      <NavLinks>
        {/* <a onClick={() => window.scrollTo({
          top:0,
          behavior:"smooth"
        })}>Início</a> */}
        <a onClick={handleScrollTo(anchors["beers"])}>Cervejas</a>
        <a onClick={handleScrollTo(anchors["events"])}>Eventos</a>
        {/* <a onClick={handleScrollTo(anchors["locale"])}>Onde estamos</a> */}
        {/* <a onClick={handleScrollTo(anchors["about"])}>Sobre</a> */}
        <a onClick={handleScrollTo(anchors["footer"])}>contato</a>
        <img src={Menu} onClick={props.showMenu} />
        {/* <MenuMobile/> */}
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
  h1 {
    cursor: pointer;
  }
  @media (max-width: ${props => props.theme.queries.md}) {
    position: fixed;
    background: ${props => props.theme.color.black};
    border-bottom: 2px solid ${props => props.theme.color.black};
    z-index: 9999;
    height: 60px;
    h1 {
      color: ${props => props.theme.color.white};
      font-size: 1.7rem;
    }
  }
`;

const NavLinks = styled.div`
  padding-left: 2em;
  display: flex;
  justify-content: space-between;
  a {
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 600;
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
    /* max-width: 900px; */
  }
  @media (max-width: ${props => props.theme.queries.md}) {
    a {
      display: none;
    }
    img {
      width: 25px;
      cursor: pointer;
      transition: 0.5s;
    }
  }
`;
