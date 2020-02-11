import React, { useState } from "react";
import styled from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import { Container, Button, Input } from "../../components/UI";

import Logo from "../../public/logo/logo.svg";

import { request } from "../../utils/api";

const ForgotPage = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Layout>
      <SEO title="Forgot Password | Quidd" />
      <HeaderTop>
        <a href="/">
          <img className="logotype" loading="lazy" src={Logo} alt="logo" />
        </a>
      </HeaderTop>
      <Container display="flex" alignItems="center" justifyContent="center">
        {status === 0 ? (
          <Box>
            <h2>So you forgot password? We can help.</h2>
            <p>
              To reset your password, enter the email address or username you use to sign in to
              Quidd. <br /> You will be sent an email with instructions on how to reset password.
            </p>
            {error && <p style={{ color: "#e63462", padding: 0, margin: 0 }}>{error}</p>}
            <Input
              placeholder="Email or Username"
              type="text"
              height={45}
              onChange={e => setValue(e.target.value)}
            />
            <Button
              disabled={!value}
              loading={isLoading}
              height={45}
              label={isLoading ? "SENDING" : "SEND"}
              onClick={async () => {
                setIsLoading(true);
                try {
                  let payload = {};
                  if (value.includes("@")) {
                    payload.email = value.trim();
                  } else {
                    payload.username = value.trim();
                  }
                  const result = await request({
                    method: "post",
                    baseUrl: "website",
                    route: "forgot_password",
                    payload
                  });

                  setStatus(1);
                  setIsLoading(false);
                } catch (error) {
                  setStatus(0);
                  setIsLoading(false);
                  if (error.response) {
                    setError(error.response.data.error.message.split(";")[0]);
                    setTimeout(() => {
                      setError("");
                    }, 2000);
                  }
                }
              }}
            />
          </Box>
        ) : (
          <Box>
            <h2>The reset email is on its way</h2>
            <p>
              An email was sent to your account. Please check your inbox and follow the instructions
              to reset your password. <br />
              Please be sure to check the junk folder of your email client.
            </p>
          </Box>
        )}
      </Container>
    </Layout>
  );
};

export default ForgotPage;

const HeaderTop = styled.div`
  background-color: #fff;
  position: fixed;
  height: 80px;
  z-index: 99;
  width: 100%;
  margin-bottom: 100px;
  a {
    padding: 1em 2em;
    z-index: 3;
  }
  img {
    width: 100px;
    height: auto;
    cursor: pointer;
  }
`;

const Box = styled.div`
  padding: 12rem 5rem 10rem 5rem;
`;
