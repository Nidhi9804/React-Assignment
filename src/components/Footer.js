import React from 'react'
import { Link } from 'gatsby'
import './Navbar.css'
export default function Footer() {
  return (
<>
    <nav>
<div className='logo'>Medi<span>Care+</span></div>

<div className='links'>
    <Link className='navlinks' to="/">Home</Link>
    <Link className='navlinks' to="/">About</Link>
    <Link className='navlinks' to="/">Services</Link>
    <Link className='navlinks' to="/">News</Link>
    

    

</div>
    </nav>
    
<footer style={{backgroundColor:"#d2fde5" , padding:"15px"}}>
    <div className='icons container '>
       <img src="/facebook.png" style={{height: "27px" , background: "grey", borderRadius: "35px",marginRight:" 4px",width: "32px"}}/>
       <img src="/google.png" style={{height: "27px" , background: "grey", borderRadius: "35px",marginRight:" 4px",width: "32px"}}/>
       <img src="/twitter.png"style={{height: "27px" , background: "grey", borderRadius: "35px",marginRight:" 4px",width: "32px"}}/>
    <p style={{fontSize:"13px", marginTop :"11px"}}>&#169; 2020 PodPayment -2020</p>

    </div>
    
</footer>
    </>
  )
}
