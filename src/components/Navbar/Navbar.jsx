import React, { useState } from 'react';
import "./Navbar.css"
import Clock from '../../lib/Clock';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mobile-navbar" style={{display:"flex", justifyContent: "space-around", color: "white", backGround:"green" }}>
      <div className="menu-toggle" onClick={toggleMenu}>
        FyeBurgers
      </div>
      <div className="">
        <Clock />

      </div>
      {isOpen && (
        <ul onClick={toggleMenu} className="dropdown-menu">

          <Link to="/">Home</Link>
          <Link to="/employees">Employee</Link>
          <Link to="/inventories">Inventory</Link>
          <Link to="/sales">Sales</Link>
          <Link to="/stores">Stores</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/menu">Menu</Link>
        </ul>
      )}

      <Link to="/">Home</Link>
      <Link to="/employees">Employee</Link>
      <Link to="/inventories">Inventory</Link>
      <Link to="/sales">Sales</Link>
      <Link to="/stores">Stores</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/menu">Menu</Link>
    </nav>
  );
};

export default Navbar;
