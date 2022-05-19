import NavBar from "./components/Navbar/NavBar";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Contacto from "./views/Contacto/Contacto";
import Tienda from "./views/Tienda/Tienda";
import Nosotros from "./views/Nosotros/Nosotros";
import Cart from "./views/Cart/Cart";
import Product from "./views/Product/Product";
import Category from "./views/Category/Category";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<Tienda />} />
        <Route exact path="/tienda" element={<Tienda />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/category/:categoryId" element={<Category />} />
        <Route exact path="/nosotros" element={<Nosotros />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
