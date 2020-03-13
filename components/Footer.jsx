import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Container } from "./UI";

import Insta from "../public/logo/instagram.svg";
import Face from "../public/logo/facebook.svg";

const Footer = () => {
  return (
    <NewContainer display="flex" flexDirection="column">
      <Wrap>
        <WrapBorderBottom>
          <Title>Let's be friends!</Title>
        </WrapBorderBottom>
        <Grid>
          <ContainerSocialMedia display="flex" flexDirection="column" width="100%">
            <WrapBorderBottom className="social-media">
              <Text className="social-media">Connect with us on</Text>
            </WrapBorderBottom>
            <Container display="flex" className="wrap-icons">
              <a href="https://instagram.com" rel="noopener" target="_blank">
                <IconSocialMedia src={Insta} />
              </a>
              <a href="https://facebook.com" rel="noopener" target="_blank">
                <IconSocialMedia src={Face} />
              </a>
            </Container>
          </ContainerSocialMedia>
          <Container display="flex" flexDirection="column">
            <WrapBorderBottom className="">
              <Text>Contact us</Text>
            </WrapBorderBottom>
            <Container>
              <WrapInputs display="flex">
                <Input style={{ marginRight: ".5em" }} placeholder="Nome" />
                <Input placeholder="Email" />
              </WrapInputs>
              <Textarea placeholder="Message" />
            </Container>
          </Container>
        </Grid>
      </Wrap>
    </NewContainer>
  );
};

export default Footer;

const NewContainer = styled(Container)`
  display:flex;
  justify-content:center;
  min-height:100vh;
  background-color: ${props => props.theme.color.black};
  @media (max-width: ${props => props.theme.queries.md}) {
    .label {
      display: none;
    }
    .wrap-icons {
      justify-content: center;
    }
  }
`;

const Wrap = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: ${props => props.theme.color.white};
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 0.5em;
  @media(max-width:${props => props.theme.queries.sm}){
    font-size: 3rem;
  }
`;

const WrapBorderBottom = styled(Container)`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.color.white};
  @media (max-width: ${props => props.theme.queries.md}) {
    border-bottom: none;
  }
`;

const Grid = styled.div`
  margin-top: 4em;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  @media (max-width: ${props => props.theme.queries.md}) {
    grid-template-columns: 1fr;
  }
`;

const Text = styled.div`
  font-size: 1rem;
  color: ${props => props.theme.color.white};
  padding-bottom: 2em;
`;

const ContainerSocialMedia = styled(Container)`
  @media (max-width: ${props => props.theme.queries.md}) {
    .social-media {
      text-align: center;
      padding-bottom: 0 !important;
      margin-left: -0.3em;
    }
  }
`;

const IconSocialMedia = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 1em;
  cursor: pointer;
  margin-top: 4em;
  @media (max-width: ${props => props.theme.queries.md}) {
    margin-top: 2em;
  }
`;
//right

const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 0.3em;
  text-indent: 0.5em;
  border: none;
  @media (max-width: ${props => props.theme.queries.sm}) {
    margin-bottom: 2em;
  }
`;

const WrapInputs = styled(Container)`
  padding-top: 3em;
  @media (max-width: ${props => props.theme.queries.md}) {
    padding-top: 0em;
  }
  @media (max-width: ${props => props.theme.queries.sm}) {
    flex-direction: column;
  }
`;

const Textarea = styled.textarea`
  border-radius: 0.3em;
  border: none;
  text-indent: 10px;
  margin-top:.7em;
  width: 100%;
  height: 145px;
`;
