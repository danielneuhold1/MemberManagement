import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav(){
  return(
        <div className="navbar">
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/courses">Meine Kurse</Link>
              <Link to="/logout">Logout</Link>
           </ul>
        </div>
  );
}