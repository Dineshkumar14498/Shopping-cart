import React, { useState } from 'react'

const Card = ({ setProductCount, img, title, price }) => {

  // Initialize 'btnStatus' state variable to false and provide 'setBtnStatus' function to update it.
  const [btnStatus, setBtnStatus] = useState(false);

  //Function to update button and cart status
  const change = () => {
    setBtnStatus(!btnStatus);
    !btnStatus ? setProductCount(count => count + 1)
      : setProductCount(count => count - 1);
  }

  return (
    <div className='card col-xl-4 col-lg-6'>
      <div className='card-content'>
        <img src={img} alt="" />
        <h4 className='mt-3'>{title}</h4>
        <p>{price}</p>
        <button onClick={change}
          className={btnStatus ? 'btn border-dark' : 'btn btn-dark'}>
          {btnStatus ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}


export default Card