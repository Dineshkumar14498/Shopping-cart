import React, { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import Poster from './Components/Poster'
import Product from './Components/Product'

const App = () => {
  //  'productCount' state variable to 0 and provide 'setProductCount' 
  const [productCount,setProductCount] = useState(0);
  return (
    <div className='container'>
      <Header productCount = {productCount}/>  
      <Poster/>
      <Product setProductCount = {setProductCount}/>
    </div>
  )
}

export default App
