import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  padding: 15px;
`;

const ContainerProduct = styled.section`
  margin: 5px;
  height: max-content;
  border: 1px solid rgba(0, 0, 0, 0.237);
  border-radius: 15px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const Name = styled.p`
  padding: 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  `;
const Price = styled.p`
  padding: 5px;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
`;

const Products = ({ products }) => {
  console.log(products);

  return (
    <main>
      <Container>
        {products.map((product) => (
          <ContainerProduct>
            <Img alt={product.name} src={product.images.img1} />
            <Name>{product.name}</Name>
            <Price>$ {product.price}</Price>
          </ContainerProduct>
        ))}
      </Container>
    </main>
  );
};

export default Products;
