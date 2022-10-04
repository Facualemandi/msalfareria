import React, { useState } from "react";
import styled from "styled-components";
import { FcGoogle } from 'react-icons/fc';
import { useTheContext } from "../../context/contex";
import { NavLink, useNavigate } from "react-router-dom";
import Loader1 from "../../Loaders.js/Loader1";

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
  color: white;
  font-size: 35px;
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
  z-index: 1500;
  max-width: 600px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #7d63b449;
  padding: 15px;
  border-radius: 20px;
  margin-top: 15px;
  position: relative;

  label {
    margin-top: 10px;
    color: white;
  }

  input {
    padding: 15px;
    border: none;
    border-radius: 7px;

    :nth-child(7) {
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
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NotAcc = styled.p`
  margin-top: 5px;

  span {
    margin-left: 5px;
    color: blue;
  }
`;
const IconGoogle = styled(FcGoogle)`
margin-left: 15px;
`
const Errror = styled.p`
  color: rgb(198, 68, 68);
  margin-top: 3px;
`
const NavL = styled(NavLink)`
   
`



const Start = () => {
   const {login, user, setUser} =  useTheContext();
   const navigate = useNavigate();
   const [error, setError] = useState({});
   const [loader, setLoader] = useState(false)


 
   const handleLogin = async (e) => {
    e.preventDefault();
     try {
        setLoader(true)
        await login(user.email, user.password, user);
        navigate('/home');
        setLoader(false);

     } catch (error) {
      setLoader(false);
      let errors = {};
        console.log(error.code)
        if(error.code === 'auth/user-not-found'){
          errors.notUser = 'El usuario no existe.'
        }
        if(error.code === 'auth/wrong-password'){
           errors.wrongPass = 'Contraseña incorrecta'
        }
        if(error.code === 'auth/invalid-email'){
          errors.invalidEmail = 'Email no valido'
        }
        if(error.code === 'auth/internal-error'){
          errors.internalError = 'Por favor, verifica los datos'
        }
        return setError(errors)
     }
}


const enterUser = (e) => {
  setUser({...user, [e.target.name]: e.target.value});
}



  return (
    <Main>
      <Container>
        <Title>AlfareriaMS (LOGO) </Title>

        <Form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input type={"email"} onChange={enterUser} name='email' placeholder="email@gmail.com" />
          <Errror>{error.notUser || error.invalidEmail}</Errror>
          

          <label htmlFor="password">Password</label>
          <input type={"password"} onChange={enterUser}  placeholder="Contraseña" name="password"/>
          <Errror>{error.wrongPass}</Errror>
        

           <input type={"submit"} value="Ingresar" /> 

           {loader && <Loader1/>}

        </Form>
        
        <NotAcc>
          no tienes cuenta? <NavL to={'/register'}>Registrarse</NavL>
        </NotAcc>

        <Buttons>Ingresar con Google <IconGoogle/> </Buttons>
        <Buttons>Invitado +</Buttons>
      </Container>
    </Main>
  );
};

export default Start;
