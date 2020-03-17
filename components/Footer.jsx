import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { Container } from "./UI";

import Insta from "../public/logo/instagram.svg";
import Face from "../public/logo/facebook.svg";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const saveMessage = () => {
    const url = "https://v2-api.sheety.co/b8157d1ac6a9d1d94be11b0ac7323575/burtonComBr/emails";
    const username = "burton";
    const password = "burton@10";
    let headers = new Headers();
    headers.set("Authorization", "Basic " + btoa(username + ":" + password));
    headers.set("Content-Type", "application/x-www-form-urlencoded");

    fetch(url, {
      method: "POST",
      headers: headers,
      body: new URLSearchParams(`email[name]=${name}&email[email]=${email}&email[message]=${msg}`)
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };

  return (
    <NewContainer display="flex" flexDirection="column">
      <Wrap>
        <WrapBorderBottom>
          <Title>Vamos trocar uma ideia!</Title>
        </WrapBorderBottom>
        <Grid>
          <ContainerSocialMedia display="flex" flexDirection="column" width="100%">
            <WrapBorderBottom className="social-media">
              <Text className="social-media">Se conecte com a gente</Text>
            </WrapBorderBottom>
            <GridSociaMedia>
              <Container display="flex" className="wrap-icons">
                <a href="https://instagram.com/burtonsjc" rel="noopener" target="_blank">
                  <IconSocialMedia src={Insta} />
                </a>
                <a href="https://facebook.com/burtonsjc" rel="noopener" target="_blank">
                  <IconSocialMedia src={Face} />
                </a>
              </Container>
              <Container
                display="flex"
                flexDirection="column"
                alignItems="flex-end"
                justifyContent="flex-end"
              >
                <Phone>(12) 99704-7406</Phone>
                <Email>geison@burton.com.br</Email>
              </Container>
            </GridSociaMedia>
          </ContainerSocialMedia>
          <Container display="flex" flexDirection="column">
            <WrapBorderBottom className="">
              <Text>Entre em contato com a gente</Text>
            </WrapBorderBottom>
            <Container>
              <WrapInputs display="flex">
                <Input
                  style={{ marginRight: ".5em" }}
                  placeholder="Nome"
                  onChange={e => setName(e.target.value)}
                />
                <Input placeholder="Email" onChange={e => setEmail(e.target.value)} />
              </WrapInputs>
              <Textarea placeholder="Mensagem" onChange={e => setMsg(e.target.value)} />
            </Container>
            <BtnSend onClick={saveMessage}>Enviar</BtnSend>
          </Container>
        </Grid>
      </Wrap>
    </NewContainer>
  );
};

export default Footer;

const NewContainer = styled(Container)`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: ${props => props.theme.color.black};
  @media (max-width: ${props => props.theme.queries.md}) {
    .label {
      display: none;
    }
    .wrap-icons {
      justify-content: flex-start;
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
  @media (max-width: ${props => props.theme.queries.sm}) {
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
  @media (max-width: ${props => props.theme.queries.sm}) {
    .social-media {
      text-align: left;
      margin-left: -0.1em;
    }
  }
`;

const GridSociaMedia = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.queries.sm}) {
    grid-template-columns: 1fr;
    justify-items: flex-start !important;
    margin-bottom: 5em;
  }
`;

const Phone = styled.div`
  color: ${props => props.theme.color.white};
  font-size: 1.2rem;
  margin-top: 3em;
  font-weight: 500;
  @media (max-width: ${props => props.theme.queries.md}) {
    margin-top: 2em;
  }
`;

const Email = styled.div`
  color: ${props => props.theme.color.white};
  font-size: 1.2rem;
  margin-top: 1em;
  font-weight: 500;
  @media (max-width: ${props => props.theme.queries.md}) {
    margin-top: 2em;
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
  margin-bottom: 1em;
  @media (max-width: ${props => props.theme.queries.md}) {
    padding-top: 0em;
  }
  @media (max-width: ${props => props.theme.queries.sm}) {
    flex-direction: column;
    margin-bottom: 0.3em;
  }
`;

const Textarea = styled.textarea`
  border-radius: 0.3em;
  border: none;
  text-indent: 10px;
  width: 100%;
  height: 145px;
  padding: 1em 0;
`;

const BtnSend = styled.button`
  background: ${props => props.theme.color.gold};
  color: ${props => props.theme.color.white};
  outline: none;
  border: none;
  border-radius: 0.3em;
  padding: 0.5em;
  margin-top: 0.7em;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.9;
  }
  @media (max-width: ${props => props.theme.queries.sm}) {
    margin-top: 2em;
  }
`;
