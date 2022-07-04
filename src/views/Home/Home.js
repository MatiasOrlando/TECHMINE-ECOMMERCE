import React from "react";
import CarouselHome from "../../components/CarouselHome/CarouselHome";
import { NavLink } from "react-router-dom";
import SwiperTest from "../../components/SwiperTest/SwiperTest";

export default function Home({ setShowNav, setShowFoot }) {
  setShowNav(true);
  setShowFoot(true);
  return (
    <>
      <CarouselHome />
      <div className="homeImgParent">
        <div className="homeImg">
          <div className="imgBlockChain">
            <img src="/images/blockChain.jpg" alt="Geforce RTX FTW3" />
          </div>
        </div>
        <div className="homeImg">
          <div>
            <img src="/images/amdIntel1.jpg" alt="Arma tu pc gamer" />
          </div>
          <div>
            <img src="/images/amdIntel2.jpg" alt="Arma tu pc" />
          </div>
        </div>
      </div>
      <div className="categoryCards">
        <div className="item" style={{ width: "320px" }}>
          <div className="card1">
            <div className="logo1">
              <img src="/images/logoHomeGforce.png" alt="Logo Geforce" />
            </div>
            <div className="products">
              <div className="item">
                <img
                  src="/images/gt1030.jpg"
                  alt="Geforce gt 1030"
                  style={{ width: "90px", height: "90px" }}
                />
              </div>
              <div className="item">
                <img
                  src="/images/gtrtx3090.jpg"
                  alt="Geforce gt rtx 3090"
                  style={{ width: "90px", height: "90px" }}
                />
              </div>
              <div className="item">
                <img
                  src="/images/gtx1650.jpg"
                  alt="Gforce gtx1650"
                  style={{ width: "90px", height: "90px" }}
                />
              </div>
            </div>
            <div style={{ marginTop: "40px" }}>
              <NavLink className="btn-clean" to="/category/placas-de-video">
                Ver más
              </NavLink>
            </div>
          </div>
        </div>
        <div className="item" style={{ width: "320px" }}>
          <div className="card2">
            <div className="logo2">
              <img src="/images/logoHomeIntel.png" alt="Intel" />
            </div>
            <div className="products">
              <div className="item">
                <img
                  src="/images/intelg5400.jpg"
                  alt="intel g5400"
                  style={{ width: "90px", height: "90px" }}
                />
              </div>
              <div className="item">
                <span>
                  <img
                    src="/images/intel8100.jpg"
                    alt="intel i8100"
                    style={{ width: "90px", height: "90px" }}
                  />
                </span>
              </div>
              <div className="item">
                <img
                  src="/images/intel9600.jpg"
                  alt="intel i9600"
                  style={{ width: "90px", height: "90px" }}
                />
              </div>
            </div>
            <div style={{ marginTop: "40px" }}>
              <NavLink className="btn-clean" to="/category/procesadores">
                Ver más
              </NavLink>
            </div>
          </div>
        </div>
        <div className="item" style={{ width: "320px" }}>
          <div className="card3">
            <div className="logo3">
              <img src="/images/logoHomeSsd.png" alt="SSD" />
            </div>
            <div className="products">
              <div className="item">
                <span>
                  <img
                    src="/images/ssd30.jpg"
                    alt="HD SSD 30"
                    style={{ width: "90px", height: "90px" }}
                  />
                </span>
              </div>
              <div className="item">
                <img
                  src="/images/ssdSata3.jpg"
                  alt=" HD SSD Sata 3"
                  style={{ width: "90px", height: "90px" }}
                />
              </div>
              <div className="item">
                <img
                  src="/images/ssd35.jpg"
                  alt="HD SSD 35"
                  style={{ width: "90px", height: "90px" }}
                />
              </div>
            </div>
            <div style={{ marginTop: "40px" }}>
              <NavLink className="btn-clean" to="/category/discos-ssd">
                Ver más
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <SwiperTest />
    </>
  );
}
