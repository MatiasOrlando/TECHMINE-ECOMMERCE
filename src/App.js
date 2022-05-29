import NavBar from "./components/Navbar/NavBar";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Contacto from "./views/Contacto/Contacto";
import Tienda from "./views/Tienda/Tienda";
import Cart from "./views/Cart/Cart";
import Product from "./views/Product/Product";
import Category from "./views/Category/Category";
import CustomProvider from "./components/CustomProvider/CustomProvider";

function App() {
  return (
    <BrowserRouter>
      <CustomProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/tienda" element={<Tienda />} />
          <Route exact path="/product/:id" element={<Product />} />
          <Route exact path="/category/:categoryId" element={<Category />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </CustomProvider>
    </BrowserRouter>
  );
}

export default App;
