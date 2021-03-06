import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserForm from "./UserForm";

export default function Login() {
  const navigate = useNavigate();

  async function handleSubmit(username: string, password: string) {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );
    if (response.status === 200) {
      const token = await response.text(); 
      localStorage.setItem("jwt", token);
      navigate("/home");
    } else {
      alert("Anmeldung fehlgeschlagen");
    }
  }

  return (
    <Container>
      <StyledHeadline>Log dich ein und los geht's...</StyledHeadline>
      <UserForm type="Login" onSubmit={handleSubmit} />
      <LinkContainer>
        <Link to="/register">Registrieren</Link>
      </LinkContainer>
    </Container>
  );
}

export const Container = styled.div`
  display: grid;
  justify-items: center;
  align-content: start;
  gap: 20px;
  margin: 30px;
  height: 90vh;
  background-color: #83c5be;
  border: 4px solid var(--font);
`;

export const LinkContainer = styled.div`
  align-self: center;
  color: var(--font);
`;

export const StyledHeadline = styled.p`
  font-size: 2em;
  font-weight: 700;
  text-align: center;
  padding: 0 20px;
`;
