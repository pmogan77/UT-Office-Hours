import React from "react";
function Navbar() {
    return (
        <header id="header">
        <a href="http://www.google.com"><img className="logo" src="../src/logo.png" alt="logo" /></a>
        <nav>
          <ul className="nav__links">
            <li><a href="http://www.google.com">Home</a></li>
            <li><a href="http://www.google.com">Join</a></li>
            <li><a href="http://www.google.com">View</a></li>
            <li><a href="http://www.google.com">About</a></li>
          </ul>  
        </nav>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </header>
    )
}

export default Navbar;