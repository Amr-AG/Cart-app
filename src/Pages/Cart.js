import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {
  addCartAction,
  clearCart,
  decreaseQuantity,
  removeCartAction,
} from "../RTK/Slices/cartSlice";
import "./Cart.css";

export default function Cart() {
  const cartProducts = useSelector((state) => state.cart);
  const subTotal = cartProducts.reduce(
    (acc, price) => (acc += price.price * price.quantity),
    0
  );
  const dispatch = useDispatch();
  return (
    <div>
      <Container style={{ padding: "25px", minHeight: "100vh" }}>
        <span
          style={{ margin: "20px auto", fontSize: "25px", fontWeight: "bold" }}
        >
          Shopping Cart
        </span>
        <div className="cartShopping">
          <div className="top">
            <Button
              variant="warning"
              style={{ textAlign: "start" }}
              onClick={() => {
                dispatch(clearCart());
              }}
            >
              Clear Cart
            </Button>
            <span style={{ textAlign: "end", margin: "0" }}>Price</span>
          </div>

          {cartProducts.map((product) => (
            <div key={product.id} className="cartProducts">
              <img
                style={{ width: "80px", margin: " 0 10px" }}
                src={product.image}
                alt={product.title}
              />

              <p style={{ margin: " 0 auto", width: "50%" }}>
                {product.description.slice(0, 110)}
              </p>
              <h4 style={{ margin: " 0 0 100px 0", textAlign: "end" }}>
                {product.price} $
              </h4>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    margin: " 0 0 0 10px ",
                    width: "100%",
                    textAlign: "start",
                  }}
                >
                  Quantity{" "}
                  <span
                    style={{
                      background: "#efefef",
                      padding: "0px 8px",
                      fontSize: "18px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      borderRadius: "4px",
                      margin: "0 5px",
                    }}
                    onClick={() => dispatch(decreaseQuantity(product))}
                  >
                    -
                  </span>{" "}
                  {product.quantity}{" "}
                  <span
                    style={{
                      background: "#efefef",
                      padding: "0px 8px",
                      margin: "0 5px",
                      fontSize: "18px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      borderRadius: "4px",
                    }}
                    onClick={() => dispatch(addCartAction(product))}
                  >
                    +
                  </span>
                </p>
                <Button
                  size="sm"
                  variant="outline-danger"
                  style={{ textAlign: "start" }}
                  onClick={() => {
                    dispatch(removeCartAction(product));
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
        <h5 style={{ textAlign: "end", margin: "15px auto" }}>
          Subtotal {subTotal.toFixed(2)} $
        </h5>
      </Container>
    </div>
  );
}
