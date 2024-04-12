import React, { useState } from 'react';
import Clock from '../../lib/Clock';
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mobile-navbar" >
      <div className="menu-toggle" onClick={toggleMenu}>
        FyeBurgers
      </div>
      <div className="">
        <Clock />

      </div>
      {isOpen && (
        <ul  onClick={toggleMenu} className="dropdown-menu">

          <Link to="/">Home</Link>
          <Link to="/employees">Employee</Link>
          <Link to="/inventories">Inventory</Link>
          <Link to="/sales">Sales</Link>
          <Link to="/stores">Stores</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/menu">Menu</Link>
        </ul>
      )}

<ul className="menu-list">
        <li><Link style={{ textDecoration: 'none' }} to="/" className="menu-link">Home</Link></li>
        <li><Link style={{ textDecoration: 'none' }} to="/employees" className="menu-link">Employee</Link></li>
        <li><Link style={{ textDecoration: 'none' }} to="/inventories" className="menu-link">Inventory</Link></li>
        <li><Link style={{ textDecoration: 'none' }} to="/sales" className="menu-link">Sales</Link></li>
        <li><Link style={{ textDecoration: 'none' }} to="/stores" className="menu-link">Stores</Link></li>
        <li><Link style={{ textDecoration: 'none' }} to="/orders" className="menu-link">Orders</Link></li>
        <li><Link style={{ textDecoration: 'none' }} to="/menu" className="menu-link">Menu</Link></li>
      </ul>
      {/* <Link style={{textDecoration: 'none'}} to="/">Home</Link>
      <Link style={{textDecoration: 'none'}} to="/employees">Employee</Link>
      <Link style={{textDecoration: 'none'}} to="/inventories">Inventory</Link>
      <Link style={{textDecoration: 'none'}} to="/sales">Sales</Link>
      <Link style={{textDecoration: 'none'}} to="/stores">Stores</Link>
      <Link style={{textDecoration: 'none'}} to="/orders">Orders</Link>
      <Link style={{textDecoration: 'none'}} to="/menu">Menu</Link> */}
    </nav>
  );
};

export default Navbar;
