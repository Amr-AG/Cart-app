import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css";
import "./Nav.css";
import { SlBasket } from "react-icons/sl";

export default function NavPar() {
  const productCart = useSelector((state) => state.cart);

  return (
    <div>
      <Navbar fixed="top" bg="light" expand="lg">
        <Container fluid>
          <Link className="NavLink" to="/">
            Home
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="NavLink" to="products">
                All Categories
              </Link>
              <Link
                className="NavLink"
                to="cart"
                style={{ position: "relative" }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <SlBasket
                    style={{
                      fontSize: "35px",
                      color: "#313131",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      left: "12px",
                      top: "-8px",
                      color: "#ffc107",
                      fontWeight: "bold",
                      background: "#424242",
                      borderRadius: "50%",
                      padding: " 1px 6px",
                      fontSize: "14px",
                    }}
                  >
                    {productCart.reduce(
                      (acc, product) => (acc += product.quantity),
                      0
                    )}
                  </span>
                  Cart
                </div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
