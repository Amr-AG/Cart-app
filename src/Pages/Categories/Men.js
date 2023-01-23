/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCartAction } from "../../RTK/Slices/cartSlice";
import "../Home.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default function Men() {
  const apiUrl = "https://fakestoreapi.com/products/category/men's%20clothing";
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const getJewelry = async () => {
    const res = await fetch(`${apiUrl}`);
    const data = await res.json();
    return setProducts(data);
  };
  useEffect(() => {
    getJewelry();
  }, []);
  return (
    <div>
      <Container style={{ padding: "25px 0", minHeight: "100vh" }}>
        <span
          style={{ margin: "20px auto", fontSize: "25px", fontWeight: "bold" }}
        >
          Men's Products
        </span>
        <Row style={{ padding: "25px 0" }}>
          {products.map((product) => (
            <Col key={product.id} className="my-3">
              <Card
                className="pt-4 pb-0 px-4 cardProduct"
                style={{ width: "18rem", margin: "auto" }}
              >
                <Link to={`/products/${product.id}`}>
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
                    <Link to={`/products/${product.id}`}>
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
