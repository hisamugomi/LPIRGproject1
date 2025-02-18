import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../components/Navbar.css';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const togglemenu = () => {
        setOpen(!open);
    }
    return (
        <div className="hamburger-container">
      {/* Hamburger Icon */}
      
      <div className={`hamburger-icon ${open ? 'open' : ''}`} onClick={togglemenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <button className="togglebutton" onClick={togglemenu}></button>
      </div>

      {/* Navigation Menu */}
      <nav className={`menu ${open ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/blog">blog</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};
  
// function Navbar() {
//     return(
//         <div className="navbar">
//             <button className='navbar-toggle'>Menu</button> 
//             <ul className='navbar-menu'>
//                 <li classname="home-li"><Link to="/">Home</Link></li>
//                 <li><Link to="/blog">Blog</Link></li>
//                 <li><Link to="/about">About</Link></li>
//             </ul>
//         </div>
//     )
// }


export default Navbar;