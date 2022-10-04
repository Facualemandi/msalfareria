import React from 'react'
import styled from 'styled-components'
import Dark from "../../images/dark.png";
import User from "../../images/user.png";
import Cart from "../../images/cart.png";

const Nav = styled.nav`
 position: fixed;
 bottom: 0px;
 height: auto;
 border: 1px solid rgba(0, 0, 0, 0.150);
 width: 100%;
 padding: 7px;
 display: flex;
 justify-content: space-around;
`
const Img = styled.img`
width: 65px;
height: 65px;
border: 1px solid rgba(0, 0, 0, 0.250);
padding: 5px;
border-radius: 15px;
`
const NavButtom = () => {
  return (
    <Nav>
        <Img alt='' src={Dark}/>
        <Img alt='' src={User}/>
        <Img alt='' src={Cart}/>
    </Nav>
  )
}

export default NavButtom