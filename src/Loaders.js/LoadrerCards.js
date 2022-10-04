import React from "react";
import styled from "styled-components";
import "../Loaders.js/LoadrerCards.css";

const Div  = styled.div`
height: auto;
display: grid;
grid-template-columns: repeat(2, 1fr);
padding: 10px;
div{
    
}
`
const LoadrerCards = () => {
  return (
    <>
    <Div>
      <div className="loader-two"></div>
      <div className="loader-two"></div>
      <div className="loader-two"></div>
      <div className="loader-two"></div>
      <div className="loader-two"></div>
      <div className="loader-two"></div>
    </Div>
    </>
  );
};

export default LoadrerCards;
