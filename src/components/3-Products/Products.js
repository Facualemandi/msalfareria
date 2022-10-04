import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useTheContext } from "../../context/contex";


const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  padding: 15px;
  margin-bottom: 100px;
`;
const ContainerProduct = styled.section`
  margin: 5px;
  height: max-content;
  border: 1px solid rgba(0, 0, 0, 0.237);
  border-radius: 15px;
  color: black;
  text-decoration: none;
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

const NavL = styled(NavLink)`
text-decoration: none;
color: black;
`

const Products = ({ products }) => {
  console.log(products);
  const {getProduct} = useTheContext();




  return (
    <main>
      <Container>
        {products.map((product) => (
          <NavL key={product.id} onClick={() => getProduct(product)} to={`/product/${product.name}/${product.id}`}>
          <ContainerProduct>
            <Img alt={product.name} src={product.images.img1} />
            <Name>{product.name}</Name>
            <Price>$ {product.price}</Price>
          </ContainerProduct>

          </NavL>
        ))}
      </Container>
    </main>
  );
};

export default Products;
