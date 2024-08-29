import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import cart_icon from "../Assets/cart_icon.png";
import heart_icon from "../Assets/heart-icon.svg";
import thechip from '../Assets/thechip2.jpg'
const Navbar = () => {
  const [menu, setMenu] = useState("shops");
  return (
    <div className="mynavbar">
      <div className="topnavbar">
        <ul className="subnav-menu">
          <li>
            Help <div className="vertical-line"></div>
          </li>
          <li>
            Find A Store <div className="vertical-line"></div>
          </li>
          <li>Sign In </li>
        </ul>
      </div>
      <div className="bottomnavbar">
        <div className="nav-logo">
         <Link to='/'><img onClick={()=>setMenu("shops")} src={thechip} alt="logo"/></Link>
          <div className="navlogo-text">
          <p>TheChjp</p>
          <h1>Since 2024</h1>
          </div>
        </div>
        <ul className="nav-menu">
          <li onClick={()=>setMenu("shops")}><Link style={{textDecoration:"none",color:"#111"}} to="/"> Shop{menu==="shops"?<hr/>:<></>}</Link></li>
          <li onClick={()=>setMenu("mens")}><Link style={{textDecoration:"none",color:"#111"}} to="/mens">Men{menu==="mens"?<hr/>:<></>}</Link></li>
          <li onClick={()=>setMenu("womens")}><Link style={{textDecoration:"none",color:"#111"}} to="/womens">Women{menu==="womens"?<hr/>:<></>}</Link></li>
          <li onClick={()=>setMenu("kids")}><Link style={{textDecoration:"none",color:"#111"}} to="/kids">Kids{menu==="kids"?<hr/>:<></>}</Link></li>
        </ul>
        <div className="nav-login-cart">
          <Link to="/login"><button>Login</button> </Link>   
        <Link to="/favorite"><img className="heart-icon" src={heart_icon} alt="heart_icon"/></Link>
          <Link to="/cart"><img src={cart_icon} alt="cart-logo" /></Link>
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
