import React from 'react';
import myImg from '../assets/logo.png';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavbarElements';
  
const Navbar = () => { 
  return (
    <>
    <div className="container-fluid">
    <div class="row align-items-center">
      <Nav className="menus">
  <div className="col-3 logo"><a href="#"> <img src={myImg}  /></a></div>
        <NavMenu className="col-9">
          <div className="menus-outer">
		<NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/work' activeStyle>
            Works
          </NavLink>
          <NavLink to='/blog' activeStyle>
            Blog
          </NavLink>
		  <NavLink to='/contact' activeStyle>
            Contact us
          </NavLink>
          </div>
        </NavMenu>
      </Nav>
      </div>
      </div>
    </>
  );
};
  
export default Navbar;