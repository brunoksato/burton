import React, { useContext } from "react";
import styled from "styled-components";
import { Container } from "./UI";
import StateManagerContext from "../state/context/createContext";

const MenuMobile = props => {
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
      props.setPanelOpen(false);
    }
  };

  return (
    <MyContainer style={{ width: "100%", height: "100vh" }} display="flex" flexDirection="column">
      {/* <Container
        padding={30}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <h1 style={{color:"#fff"}}>Burton</h1>
        <IconClose src={"/icons/cross.svg"} onClick={props.close} />
      </Container> */}
      <Container
        marginTop={30}
        height="70%"
        padding={30}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <ItemMenu
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
            props.setPanelOpen(false);
          }}
        >
          <h1>Início</h1>
        </ItemMenu>
        <ItemMenu onClick={handleScrollTo(anchors["beers"])} href="#beers">
          <h1>cervejas</h1>
        </ItemMenu>
        <ItemMenu onClick={handleScrollTo(anchors["events"])} href="#events">
          <h1>eventos</h1>
        </ItemMenu>
        <ItemMenu onClick={handleScrollTo(anchors["footer"])} href="#footer">
          <h1>contato</h1>
        </ItemMenu>
      </Container>
    </MyContainer>
  );
};

export default MenuMobile;

const MyContainer = styled(Container)`
  background: ${props => props.theme.color.black};
  transition: 0.5s;
  z-index: 999;
  @media (max-width: ${props => props.theme.queries.i5}) {
    padding-top: 70px;
  }
`;

const IconClose = styled.img`
  height: 35px;
  width: 35px;
  cursor: pointer;
`;

const ItemMenu = styled.a`
  text-decoration: none;
  h1 {
    color: ${props => props.theme.color.white};
    letter-spacing: 2px;
    margin: 0.3em 0;
    font-size: 2.7rem;
    cursor: pointer;
  }
`;
