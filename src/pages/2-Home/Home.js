import React from 'react'
import Nav from '../../components/1-Nav/Nav';
import Search from '../../components/2-Search/Search';
import NavProducts from '../../components/3-NavProducts/NavProducts';
import Products from '../../components/3-Products/Products';
import NavButtom from '../../components/4-NavButtom/NavButtom';
import { useTheContext } from '../../context/contex'
import LoadrerCards from '../../Loaders.js/LoadrerCards';



const Home = () => {

   const {products} = useTheContext();






  return ( 
    <main>
       <Nav/>
       <Search/>
       <NavProducts/>
       {products.length === 0 ? <LoadrerCards/> : <Products products={products}/>}
       <NavButtom/>
    </main>
  )
}

export default Home