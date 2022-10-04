import React from "react";
import styled from "styled-components";

const SectionInput = styled.section`
  padding-top: 70px;
`;
const Input = styled.input`
  padding: 15px;
  @media (max-width: 600px) {
    width: 90vw;
    display: flex;
    margin: auto;
    border: none;
    border: 1px solid rgba(0, 0, 0, 0.13);
    border-radius: 10px;
    box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.08);
    outline-color: lightblue;
  }
`;
const Search = () => {
  return (
    <>
      <SectionInput>
        <Input placeholder="Ingresa el producto" />
      </SectionInput>
    </>
  );
};

export default Search;
