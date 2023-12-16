import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div>
    <div className='footer'>
    <div className='logo'>
    <p>Insura-Link</p>
    </div>
    <div className='footermenu'>
    <div className='menu'>
       <p>Account</p>
       <ul>
        <li>My Account</li>
        <li>Login / Sign Up</li>
        <li>Wishlist</li>
        <li>Orders</li>
        <li>Cart</li>
        <li>Shop</li>
       </ul>
    </div>
    <div className='menu'>
    <p>Company</p>
       <ul>
        <li>About Us</li>
        <li>Careers</li>
        <li>Privacy Policy</li>
        <li>Terms Of Services</li>
        <li>Contact Us</li>
       </ul>
    </div>
    <div className='menu'>
    <p>Social Media</p>
       <ul>
        <li>Youtube</li>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Twitter</li>
       </ul>
    </div>
    </div>   
    </div>
     <div className='copyright'> <p>© 2023 All Rights Reserved</p></div>
      
    </div>
  )
}

export default Footer
