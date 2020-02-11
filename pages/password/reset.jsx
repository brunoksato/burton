import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import { Container, Button, Input } from "../../components/UI";

import Logo from "../../public/logo/logo.svg";

import { request } from "../../utils/api";

const ForgotPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newConfirmPassword, setnewConfirmPassword] = useState("");
  const [status, setStatus] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Layout>
      <SEO title="Reset Password | Quidd" />
      <HeaderTop>
        <a href="/">
          <img className="logotype" loading="lazy" src={Logo} alt="logo" />
        </a>
      </HeaderTop>
      <Container display="flex" alignItems="center" justifyContent="center">
        {status === 0 ? (
          <Box>
            <h2>Set your new password.</h2>
            {error && (
              <p style={{ color: "#e63462", padding: 0, margin: 0 }}>
                Something is wrong, try again.
              </p>
            )}
            <Input
              placeholder="New Password"
              type="password"
              height={45}
              onChange={e => setNewPassword(e.target.value)}
            />
            <Input
              placeholder="Confirm New Password"
              type="password"
              height={45}
              onChange={e => setnewConfirmPassword(e.target.value)}
            />
            <Button
              disabled={!newPassword && !newConfirmPassword && !router.query.code}
              loading={isLoading}
              height={45}
              label={isLoading ? "UPDATING" : "UPDATE"}
              onClick={async () => {
                if (newPassword !== newConfirmPassword) {
                  setError("true");
                  setTimeout(() => {
                    setError("");
                  }, 2000);
                  return;
                }
                setIsLoading(true);
                try {
                  await request({
                    method: "post",
                    baseUrl: "website",
                    route: "verify/forgot_password",
                    payload: {
                      password: newPassword.trim(),
                      code: router.query.code.trim()
                    }
                  });

                  setStatus(1);
                  setIsLoading(false);
                } catch (err) {
                  setStatus(0);
                  setIsLoading(false);
                  setError("true");
                  setTimeout(() => {
                    setError("");
                  }, 2000);
                }
              }}
            />
          </Box>
        ) : (
          <Box>
            <h2>Success!</h2>
            <p>You can log into Quidd with your new password.</p>
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
