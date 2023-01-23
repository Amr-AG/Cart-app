/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addCartAction } from "../RTK/Slices/cartSlice";
import { useDispatch } from "react-redux";
import "./P-Details.css";
export default function ProductDetails() {
  const apiUrl = "https://fakestoreapi.com/products";
  const params = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`${apiUrl}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);
  console.log(params);
  return (
    <div style={{ padding: "25px 0" }}>
      <span
        style={{ margin: "20px auto", fontSize: "25px", fontWeight: "bold" }}
      >
        Product Details
      </span>

      <Card
        style={{
          width: "100%",
          margin: "50px auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          border: "none",
          textAlign: "start",
          justifyContent: "space-between",
          minHeight: "100vh",
        }}
      >
        <Card.Img
        className="image"
          variant="top px-5 py-4 w-50 "
          src={product.image}
          alt={product.title}
        />
        <Card.Body className="ms-5">
          <Card.Title className="mb-5">{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Title className="my-5">Price : {product.price} $</Card.Title>
          <Button
            variant="warning"
            onClick={() => {
              dispatch(addCartAction(product));
            }}
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
