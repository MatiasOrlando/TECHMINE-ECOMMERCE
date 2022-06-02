import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="divFooter">
        <section className="d-flex justify-content-start p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>En las redes:</span>
          </div>
          <div
            className="d-flex justify-content-center"
            style={{ width: "85%" }}
          >
            <div className="logosRedes">
              <BsFacebook
                style={{ height: "30px", width: "30px", marginRight: "20px" }}
              />
              <BsTwitter
                style={{ height: "28px", width: "28px", marginRight: "20px" }}
              />
              <BsInstagram style={{ height: "30px", width: "30px" }} />
            </div>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">TECHMINE</h6>
                <p>
                  Empresa dedicada al mundo crypto y gamer. Los mejores precios
                  del mercado. Envíos a todo el país. Aceptamos todos los
                  métodos de pago.
                </p>
                <img
                  alt="logoTarjetas"
                  src="/images/tarjetaVisa.png"
                  style={{ height: "45px" }}
                />
                <img
                  alt="logoMercadoPago"
                  src="/images/mercadopago2.png"
                  style={{ height: "50px" }}
                />
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Productos</h6>
                <p>
                  <NavLink
                    to="/category/placas-de-video"
                    className="linksFooter"
                  >
                    Placas de Vídeo
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/category/procesadores" className="linksFooter">
                    Procesadores
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/category/discos-ssd" className="linksFooter">
                    Discos SSD
                  </NavLink>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">LINKS ÚTILES</h6>
                <p>Precios</p>
                <p>Ordenes</p>
                <p>
                  <NavLink to="/contacto" className="linksFooter">
                    Ayuda
                  </NavLink>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                <p>Paseo Colón 702 Local 170</p>
                <p>ventas@techmine.com.ar</p>
                <p>+54 11 2345 6788</p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright: TECHMINE
        </div>
      </div>
    </>
  );
};

export default Footer;
