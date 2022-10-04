import React, { useState } from 'react'
import styled from 'styled-components';
import Nav from '../../components/1-Nav/Nav';
import Search from '../../components/2-Search/Search';
import NavProducts from '../../components/3-NavProducts/NavProducts';
import Products from '../../components/3-Products/Products';
import NavButtom from '../../components/4-NavButtom/NavButtom';
import { useTheContext } from '../../context/contex'



const Home = () => {

   const {products} = useTheContext();
   console.log(products)



  return ( 
    <main>
       <Nav/>
       <Search/>
       <NavProducts/>
       <Products products={products}/>
       <NavButtom/>
    </main>
  )
}

export default Home