import Hamburger from "hamburger-react";
import React, { useState } from "react";
import styled from "styled-components";
import { useTheContext } from "../../context/contex";


const DivHamburger = styled.section`
display: flex;
justify-content: flex-end;
z-index: 1000;
right: 0px;
padding: 5px;
padding-right: 20px;
position: fixed;
background-color: white;
width: 100%;
`

const Ul = styled.ul`
position: absolute;
top: 0px;
width: 50%;
z-index: 1500;
transform: ${({value}) => !value ? 'translateX(-101%)' : 'translateX(0%)'};
transition: 0.5s;
min-height: 90vh;
background-color: white;
box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.163);
`


const Nav = () => {
    const {logAuth} = useTheContext();
    const [isOpen, setOpen] = useState(false);
    
  return (
    <>
      <DivHamburger>
        <Hamburger toggled={isOpen} toggle={setOpen} size={40}/>
      </DivHamburger>

      <Ul value={isOpen}>
        <li>Facu-</li>
        <li>Facu-</li>
        <li>Facu-</li>
        <li>Facu-</li>
        <button onClick={logAuth}>Cerrar Sesion</button>
      </Ul>
    </>
  );
};

export default Nav;
