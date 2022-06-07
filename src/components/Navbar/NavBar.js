import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { BsFillCheckCircleFill } from "react-icons/bs";

import CartWidget from "../Cartwidget/CartWidget";
import LogoMarca from "../../assets/logo/logo.jpg";
import LogitechLogo from "../../assets/logoLogitech/nav_logitech.png";
import AmdLogo from "../../assets/logoAmd/nav_amd.png";
import GforceLogo from "../../assets/logoGeforce/nav_geforce.png";
import IntelLogo from "../../assets/logoIntel/nav_intel.png";
import CorsairLogo from "../../assets/logoCorsair/nav_corsair.png";
import TrustLogo from "../../assets/logoTrust/nav_trust.png";
import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { contexto } from "../CustomProvider/CustomProvider";
import { getFirestore, getDocs, collection } from "firebase/firestore";

function NavBar() {
  const [value, setValue] = useState("");
  const navegarAProducto = useNavigate();
  const { addedToCart } = useContext(contexto);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [startSearch, setStartSearch] = useState(false);
  const [noMatches, setNoMatches] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const itemsRef = collection(db, "productos");
    getDocs(itemsRef)
      .then((snapshots) => {
        setProducts(
          snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [value]);

  const handleSearch = (event) => {
    console.log(value);
    event.preventDefault();
    if (value !== "") {
      setSearchTerm(
        products.filter((product) => {
          return product.title.toLowerCase().includes(value.toLowerCase());
        })
      );
      setStartSearch(true);
      if (searchTerm.length === 0) {
        setNoMatches(true);
      } else if (searchTerm.length > 0) {
        setNoMatches(false);
      }
      console.log(searchTerm);
    } else {
      setStartSearch(false);
    }
  };

  return (
    <>
      <div className="logosNavbar">
        <img src={TrustLogo} alt="logoTrust" />
        <img src={CorsairLogo} alt="logoCorsair" />
        <img src={IntelLogo} alt="logoIntel" />
        <img src={GforceLogo} alt="logoGforce" />
        <img src={LogitechLogo} alt="logoLogitech" />
        <img src={AmdLogo} alt="logoAmd" />
      </div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Nav.Link as="div">
            <Link to="/home">
              <img src={LogoMarca} className="logoBrand" alt="logoBrand" />{" "}
            </Link>
          </Nav.Link>
          <Navbar.Brand>
            <Link to="/home" id="mainTitle">
              TECHMINE
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as="div">
                <Link to="/home" className="navLinks">
                  Inicio
                </Link>
              </Nav.Link>
              <Nav.Link as="div">
                <Link to="/tienda" className="navLinks">
                  Tienda
                </Link>
              </Nav.Link>
              <Nav.Link as="div">
                <Link to="/contacto" className="navLinks">
                  Contacto
                </Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex" id="mainSearchNav" onSubmit={handleSearch}>
              <div className="productsFiltered">
                <div className="test">
                  <FormControl
                    type="search"
                    placeholder="¿Qué estas buscando?"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => {
                      setValue(e.target.value);
                      if (e.target.value === "") {
                        setStartSearch(false);
                        setNoMatches(false);
                      }
                    }}
                  />
                  <Button variant="outline-primary" type="submit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </Button>
                </div>
                <div className="dropdown1">
                  {startSearch && value !== ""
                    ? searchTerm.slice(0, 5).map((product) => (
                        <div
                          onClick={() => {
                            navegarAProducto(`product/${product.id}`);
                          }}
                          className="dropdown-row"
                          key={product.id}
                        >
                          {product.title}{" "}
                        </div>
                      ))
                    : ""}
                  {noMatches === true && (
                    <div className="dropdown-row">
                      NO SE HAN ENCONTRADO RESULTADOS
                    </div>
                  )}
                </div>
              </div>
            </Form>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="styleLineNav"></div>
      <div className="brandsStock">
        <li>NVIDIA</li>
        <li>MSI</li>
        <li>GIGABYTE</li>
        <li>EVGA</li>
        <li>AMD</li>
        <li>ASUS</li>
      </div>
      {addedToCart && (
        <div className="addedToCart">
          <p style={{ paddingTop: "10px" }}>
            <BsFillCheckCircleFill
              style={{ marginRight: "10px", minHeight: "40px" }}
            />
            Producto agregado al carrito
          </p>
        </div>
      )}
    </>
  );
}

export default NavBar;
