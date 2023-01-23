/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../RTK/Slices/productsSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { addCartAction } from "../RTK/Slices/cartSlice";
import { Link } from "react-router-dom";
import "./Products.css";

export default function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div>
      <Container style={{ padding: "25px 0", minHeight: "100vh" }}>
        <span
          style={{ margin: "20px auto", fontSize: "25px", fontWeight: "bold" }}
        >
          All Products
        </span>
        <Row style={{ padding: "25px 0" }}>
          {products.map((product) => (
            <Col key={product.id} className="my-3">
              <Card
                className="pt-4 pb-0 px-4 cardProduct"
                style={{ width: "18rem", margin: "auto" }}
              >
                <Link to={`${product.id}`}>
                  <Card.Img
                    className="productImg"
                    style={{ height: "255px" }}
                    variant="top"
                    src={product.image}
                  />
                </Link>
                <Card.Body>
                  <Card.Title>{product.title.slice(0, 18)}</Card.Title>
                  <Card.Text>{product.description.slice(0, 40)}</Card.Text>
                  <Card.Title className="my-3">
                    Price : {product.price} $
                  </Card.Title>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      size="sm"
                      className="productImg"
                      variant="warning"
                      onClick={() => {
                        dispatch(addCartAction(product));
                      }}
                    >
                      Add To Cart
                    </Button>
                    <Link to={`${product.id}`}>
                      <Button
                        className="productImg"
                        size="sm"
                        variant="warning"
                      >
                        Show Details
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
