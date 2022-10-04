import React from "react";
import styled from "styled-components";
import Nav from "../../components/1-Nav/Nav";
import { BsBasket } from "react-icons/bs";
import NavButtom from "../../components/4-NavButtom/NavButtom";

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Section = styled.section`
  font-family: "Roboto", sans-serif;

  p {
    margin-top: 10px;
  }

  p:nth-child(1) {
    font-size: 25px;
    font-weight: 500;
  }
`;

const DivAddCart = styled.div`
margin-top: 30px;
`;
const ButtonAddCart = styled.button`
  width: 100%;
  padding: 20px;
  background: rgb(52, 139, 236);
  background: linear-gradient(
    270deg,
    rgba(52, 139, 236, 1) 1%,
    rgba(52, 124, 215, 1) 78%
  );
  border: none;
  color: white;
  border-radius: 10px;
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;

  &&:active {
    background: rgb(52, 139, 236);
    background: linear-gradient(
      270deg,
      rgba(52, 150, 936, 1) 1%,
      rgba(52, 150, 915, 1) 78%
    );
  }

  hr {
    height: 30px;
  }
  background-color: red;
`;

const Container = styled.section`
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  color: black;
  margin-bottom: 100px;
`;

const ViewProduct = () => {
  const productStorage = localStorage.getItem("alfareriaMsProduct");
  const parseProductStorage = JSON.parse(productStorage);
  const { price, name, images, color, size, description } = parseProductStorage;

  return (
    <>
      <Nav />

      <Img alt={name} src={images.img1} />

      <Container>
        <Section>
          <p>{name}</p>
          <p>{description}</p>
          <p>Color: <span> {color}</span> </p>
          <p>Tamaño: <span>{size}</span></p>

          <DivAddCart>
            <ButtonAddCart>
              <BsBasket />
              Agregr al carrito
              <hr />
              <p>$ {price}</p>
            </ButtonAddCart>
          </DivAddCart>
        </Section>
      </Container>

      <NavButtom/>
    </>
  );
};

export default ViewProduct;