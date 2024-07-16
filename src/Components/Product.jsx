import React from "react"
import Card from "./Card"

//import product images

import product1 from "../assets/product1.jpg" 
import product from "../assets/product.jpg"
import product3 from "../assets/product3.jpg"
import product4 from "../assets/product4.jpg"
import product5 from "../assets/product5.jpg"
import product6 from "../assets/product6.jpg"




const pricedetails = [
  {img: product1, title: "iphone 13", price: "Rs.59900" },
  {img: product, title: "iphone 14", price: "Rs.69900" },
  {img: product3, title: "iphone 15", price: "Rs.79900" },
  {img: product4, title: "iphone 15 Plus", price: "Rs.99900" },
  {img: product5, title: "iphone 15 pro", price: "Rs.134900" },
  {img: product6, title: "iphone 15 pro Max", price: "Rs.159900" },

]

//ProductsContainer Component
const Product = ({ setProductCount }) => {
  return (
    <div className="row product-container g-0 d-flex justify-content-center">
      {
        pricedetails.map(product => (
          
          <Card setProductCount={setProductCount} img={product.img} title={product.title}
            price={product.price} />
        ))
      }
    </div>
  )
}

export default Product