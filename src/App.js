import NavBar from "./components/Navbar/NavBar";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Contacto from "./views/Contacto/Contacto";
import Tienda from "./views/Tienda/Tienda";
import Cart from "./views/Cart/Cart";
import Product from "./views/Product/Product";
import Category from "./views/Category/Category";
import CustomProvider from "./CustomProvider/CustomProvider";
import Footer from "./components/Footer/Footer";
import Error from "./views/Error/Error";
import Checkout from "./views/Checkout/Checkout";

function App() {
  const [showNav, setShowNav] = useState(true);
  const [showFoot, setShowFoot] = useState(true);

  return (
    <BrowserRouter>
      <CustomProvider>
        {showNav && <NavBar />}

        <Routes>
          <Route
            exact
            path="/"
            element={<Home setShowNav={setShowNav} setShowFoot={setShowFoot} />}
          />
          <Route
            exact
            path="/home"
            element={<Home setShowNav={setShowNav} setShowFoot={setShowFoot} />}
          />
          <Route exact path="/tienda" element={<Tienda />} />
          <Route exact path="/product/:id" element={<Product />} />
          <Route exact path="/category/:categoryId" element={<Category />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route
            path="*"
            element={
              <Error setShowNav={setShowNav} setShowFoot={setShowFoot} />
            }
          />
        </Routes>
        {showFoot && <Footer />}
      </CustomProvider>
    </BrowserRouter>
  );
}

export default App;
