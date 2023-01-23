import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "../../cart-app/src/Pages/Cart";
import Home from "../../cart-app/src/Pages/Home";
import NavPar from "../../cart-app/src/Pages/NavPar";
import Products from "../../cart-app/src/Pages/Products";
import React from "react";
import ProductDetails from "../../cart-app/src/Pages/ProductDetails";
import Men from "../../cart-app/src/Pages/Categories/Men";
import Woman from "../../cart-app/src/Pages/Categories/Woman";
import Jewelery from "../../cart-app/src/Pages/Categories/Jewelery";
import Footer from "../../cart-app/src/Pages/Footer";

function App() {
  return (
    <div className="App">
      <NavPar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
