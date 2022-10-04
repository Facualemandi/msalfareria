import React from "react";
import Plato from "../../images/plato.png";
import Bowl from "../../images/soup.png";
import Taza from "../../images/taza-cafe.png";
import Jarra from "../../images/jarra.png";
import styled from "styled-components";

const Img = styled.img`
  border: 1px solid rgba(0, 0, 0, 0.13);
  width: 65px;
  height: 65px;
  padding: 5px;
  border-radius: 15px;
  box-shadow: 3px 3px 3px 0px rgba(0, 0, 0, 0.10);
`;
const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
`;

const NavProducts = () => {
  return (
    <Nav>
      <Img alt={Plato} src={Plato} />
      <Img alt={Plato} src={Taza} />
      <Img alt={Plato} src={Bowl} />
      <Img alt={Plato} src={Jarra} />
    </Nav>
  );
};

export default NavProducts;
