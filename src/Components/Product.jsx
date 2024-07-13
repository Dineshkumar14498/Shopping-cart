import React from "react"
import Card from "./Card"

// product images 

const product = [
  {  title: "iphone 13", price: "Rs.59900" },
  { title: "iphone 14", price: "Rs.69900" },
 {  title: "iphone 15", price: "Rs.79900" },
  {  title: "iphone 15 Plus", price: "Rs.99900" },
  {  title: "iphone 15 pro", price: "Rs.134900" },
  {  title: "iphone 15 pro Max", price: "Rs.159900" },
  
]

//ProductsContainer Component
const Product = ({ setProductCount }) => {
  return (
    <div className="row product-container g-0 d-flex justify-content-center">
      {
        product.map(product => (
          <Card setProductCount={setProductCount} img={product.img} title={product.title}
            price={product.price} />
        ))
      }
    </div>
  )
}

export default Product