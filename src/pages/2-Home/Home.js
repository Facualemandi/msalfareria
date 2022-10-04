import React, { useState } from 'react'
import styled from 'styled-components';
import Nav from '../../components/1-Nav/Nav';
import Search from '../../components/2-Search/Search';
import Products from '../../components/3-Products/Products';
import { useTheContext } from '../../context/contex'



const Home = () => {

   const {products} = useTheContext();
   console.log(products)



  return ( 
    <main>
       <Nav/>
       <Search/>
       <Products products={products}/>
    </main>
  )
}

export default Home