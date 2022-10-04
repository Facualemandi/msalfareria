import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTheContext } from "../../context/contex";
import Loader1 from "../../Loaders.js/Loader1";

const Main = styled.main`
  height: 90vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #7d63b449;
  padding: 15px;
  border-radius: 20px;
  margin-top: 15px;
  position: relative;
  font-family: "Roboto", sans-serif;
  width: 90vw;
  max-width: 600px;

  label {
    margin-top: 10px;
    color: white;
  }

  input {
    padding: 15px;
    border: none;
    border-radius: 7px;

    :nth-child(7) {
      margin-top: 30px;
    }
  }
`;
const Errors = styled.p`
  color: rgb(198, 68, 68);
  margin-top: 3px;
`

const Register = () => {
  const { user, register, setUser } = useTheContext();
  const [error, setError] = useState({});
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      await register(user.email, user.password, user);
      navigate("/home");
      setLoader(false);
    } catch (error) {
      setLoader(false);
      let errors = {};
      console.log(error.code);
      if (error.code === "auth/weak-password") {
        errors.weakPassword = "Mínimo 6 caracteres";
      }
      if (error.code === "auth/invalid-email") {
        errors.invalidMail = "Formato de E-mail no valido";
      }
      if (error.code === "auth/email-already-in-use") {
        errors.emailIsUsed = "El E-mail esta en uso";
      }
      if (error.code === "auth/invalid-email") {
        errors.invalidEmail = "Email no valido";
      }
      if (error.code === "auth/internal-error") {
        errors.internalError = "Por favor, verifica los datos";
      } 
      return setError(errors);
    }
  };

  const enterUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Main>
      <Form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          type={"email"}
          onChange={enterUser}
          name="email"
          placeholder="email@gmail.com"
        />
         <Errors>{error.invalidMail || error.emailIsUsed}</Errors>

        <label htmlFor="password">Password</label>
        <input
          type={"password"}
          onChange={enterUser}
          placeholder="Contraseña"
          name="password"
        />
        <Errors>{error.weakPassword}</Errors>

        <input type={"submit"} value="Registrarse" />

        {loader && <Loader1 />}
      </Form>
    </Main>
  );
};

export default Register;
