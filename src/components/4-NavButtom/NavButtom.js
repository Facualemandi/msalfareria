import React, { useState } from "react";
import styled from "styled-components";
import Likes from "../../images/like.png";
import User from "../../images/user.png";
import Cart from "../../images/cart.png";

const Nav = styled.nav`
  position: fixed;
  bottom: 0px;
  height: auto;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  width: 100%;
  padding: 7px;
  display: flex;
  justify-content: space-around;
  background-color: white;
  z-index: 5000;
`;
const Img = styled.img`
  width: 65px;
  height: 65px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding: 5px;
  border-radius: 15px;
`;

const SectionCart = styled.section`
  border: 1px solid red;
  width: 100%;
  height: 500px;
  position: fixed;
  bottom: 0px;
  transform:  ${({value}) => !value ? 'translateY(100%)' : 'translateY(-80px)'};
  transition: 1s;
  z-index: 100;
`;

const NavButtom = () => {
  const [openCart, setOpenCart] = useState(false);

  const openMenuCart = () => {
    if (!openCart) {
      setOpenCart(true);
    } else {
      setOpenCart(false);
    }
  }

  return (
    <section>
      <Nav>
        <Img alt="" src={Likes} />
        <Img alt="" src={User} />
        <Img alt="" src={Cart} onClick={openMenuCart} />
      </Nav>

      <SectionCart value={openCart}>

      </SectionCart>
    </section>
  );
};

export default NavButtom;
