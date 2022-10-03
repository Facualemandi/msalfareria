import React from "react";
import styled from "styled-components";

const Main = styled.main`
  height: auto;
  min-height: 90vh;
  width: 100vw;
  font-family: "Roboto", sans-serif;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h2`
  display: flex;
  justify-content: center;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #74a6e467;
  padding: 30px;
  width: 90vw;
  border-radius: 30px;
  border: 1px solid rgba(0, 0, 0, 0.100);
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.170);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #7d63b449;
  padding: 15px;
  border-radius: 20px;
  margin-top: 15px;

  label {
    margin-top: 10px;
    color: white;
  }

  input {
    padding: 15px;
    border: none;
    border-radius: 7px;

    :nth-child(5) {
      margin-top: 10px;
    }
  }
`;

const Buttons = styled.button`
  padding: 15px;
  margin-top: 10px;
  border: none;
  border-radius: 8px;
  box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.130);
`;
const NotAcc = styled.p`
  margin-top: 5px;

  span {
    margin-left: 5px;
    color: blue;
  }
`;

const Start = () => {
  return (
    <Main>
      <Container>
        <Title>AlfareriaMS (LOGO) </Title>

        <Form>
          <label>Email</label>
          <input type={"email"} placeholder="email@gmail.com" />
          <label>Password</label>
          <input type={"password"} placeholder="Password" />
          <input type={"submit"} value="Ingresar" />
        </Form>
        <NotAcc>
          no tienes cuenta? <span>Registrarse</span>
        </NotAcc>

        <Buttons>Ingresar con Google</Buttons>
        <Buttons>Invitado +</Buttons>
      </Container>
    </Main>
  );
};

export default Start;
