import { Link } from 'gatsby'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Navbar.css";
import React from 'react'

export default function Navbar(props) {
  return (
    <nav>
<div className='logo'>Medi<span>Care+</span></div>

<div className='links'>
    <Link className='navlinks' to="/">Home</Link>
    <Link className='navlinks' to="/">About</Link>
    <Link className='navlinks' to="/">Services</Link>
    <Link className='navlinks' to="/">News</Link>
    <Button className='contact' variant="primary">Contact</Button>{' '}

    

</div>
    </nav>
  )
}
