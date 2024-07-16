import React, { useState, useEffect } from 'react'
import Cart from './cart'

const Header = ({ productCount }) => {
    // Initialize 'isScroll' state variable to false and provide 'setIsScroll' function to update it.
    const [isScroll, setIsScroll] = useState(false);
  
    // Add an event listener to update 'isScroll' state based on window scroll position
    useEffect(() => {
      function handleScroll() {
        if (window.scrollY > 50) {
          setIsScroll(true);
        }
        else {
          setIsScroll(false);
        }
      }
      window.addEventListener("scroll", handleScroll)
  
      //function to remove the event listener
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }, []) // Empty array ensures this effect runs only once
  
  
    return (
      <header className={isScroll ? 'scrolled' : ""}>
        <div className='header'>
          <div className="left">
            <h1>iphone</h1>
            <ul>
              <li>Home</li>
              <li>Store</li>
              <li>Support</li>

              <li className="nav-item dropdown">
  
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!"> watch</a></li>
                  <li><a className="dropdown-item" href="#!">Airpods </a></li>
                  <li><a className="dropdown-item" href="#!">Accessories</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <Cart productCount={productCount} />
        </div>
      </header>
  
    )
  }

export default Header;