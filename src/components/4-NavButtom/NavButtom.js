import React, { useState } from "react";
import styled from "styled-components";
import Likes from "../../images/like.png";
import User from "../../images/user.png";
import Cart from "../../images/cart.png";
import { useTheContext } from "../../context/contex";
import { AiOutlineDelete } from 'react-icons/ai';


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
  width: 100%;
  height: auto;
  position: fixed;
  bottom: 0px;
  transform: ${({ value }) =>
    !value ? "translateY(100%)" : "translateY(-80px)"};
  transition: 1s;
  z-index: 100;
  background-color: white;
  padding: 10px;
`;

const AmountCart = styled.p`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 94%;
  border-radius: 15px;
  background-color: orange;
  text-align: center;
  padding-top: 15px;
  font-size: 30px;
  background-color: rgba(172, 255, 164, 0.589);
  font-weight: bold;
  display: ${({ value }) => (value.length > 0 ? "block" : "none")};
  transition: 0.5s;
`;
const DivCart = styled.div`
  position: relative;
`;

const ImgCart = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
`;

const SectionCartMenu = styled.section`
display: flex;
border: 1px solid rgba(128, 128, 128, 0.300);
justify-content: space-around;
align-items: center;
border-radius: 10px;
padding: 10px;
margin: 10px;
`

const IconDelete = styled(AiOutlineDelete)`
   width: 30px;
   height: 30px;
`

const NavButtom = () => {
  const [openCart, setOpenCart] = useState(false);
  const { cartUser } = useTheContext();

  const openMenuCart = () => {
    if (!openCart) {
      setOpenCart(true);
    } else {
      setOpenCart(false);
    }
  };

  return (
    <section>
      <Nav>
        <Img alt="" src={Likes} />
        <Img alt="" src={User} />
        <DivCart>
          <Img alt="" src={Cart} onClick={openMenuCart} />
          <AmountCart onClick={openMenuCart} value={cartUser}>
            {cartUser.length}
          </AmountCart>
        </DivCart>
      </Nav>

      <SectionCart value={openCart}>
        {cartUser.map((product) => (
          <SectionCartMenu>
            <ImgCart alt="" src={product.images.img1} />
            <p>{product.name}</p>
            <p>$ {product.price}</p>
             <IconDelete/>
          </SectionCartMenu>
        ))}
      </SectionCart>
    </section>
  );
};

export default NavButtom;
