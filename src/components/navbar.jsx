
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export  const Navbar = () => {
  return (<>
    <div className="navbar">
      <div style={{ marginLeft: "10px", textAlign: "left", color: "white", fontSize:"30px", fontFamily:"fantasy" }}><p >STANMORE</p></div>
      <div className="links" >
        <Link to="/" style={{marginLeft:"1100px"}} > Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>         
      </div>
    </div>
    </>
  );
};

