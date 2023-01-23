import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import men from "./Images/Men.jpg";
import woman from "./Images/Woman.jpg";
import jewelary from "./Images/Jewelary.jpg";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="homeContainer">
        <Link className="homeLinks" to="men">
          <img className="homeImage" src={men} alt="Men" />
          <span>Men</span>
        </Link>
        <Link className="homeLinks" to="woman">
          <img className="homeImage" src={woman} alt="Woman" />
          <span>Woman</span>
        </Link>
        <Link className="homeLinks" to="jewelery">
          <img className="homeImage" src={jewelary} alt="Jewelry" />
          <span>Jewelry</span>
        </Link>
      </div>
    </div>
  );
}
