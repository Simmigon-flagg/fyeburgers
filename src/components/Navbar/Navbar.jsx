import React, { useState } from 'react';
import "./Navbar.css"
import Clock from '../../lib/Clock';
import { Link } from 'react-router-dom';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mobile-navbar">
      <div className="menu-toggle" onClick={toggleMenu}>
        FyeBurgers
      </div>
      <div className="">
        <Clock />
  
      </div>
      {isOpen && (
        <ul onClick={toggleMenu} className="dropdown-menu">

          <Link to="/"><li>Home</li></Link>
          <Link to="/employees"><li>Employee</li></Link>
          <Link to="/inventories"><li>Inventory</li></Link>
          <Link to="/sales"><li>Sales</li></Link>
          <Link to="/stores"><li>Stores</li></Link>



        </ul>
      )}
    </nav>
  );
};

export default MobileNavbar;
