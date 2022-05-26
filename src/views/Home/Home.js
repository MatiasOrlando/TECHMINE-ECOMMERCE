import React from "react";
import CarouselHome from "../../components/CarouselHome/CarouselHome";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <CarouselHome />
      <div className="homeImgParent">
        <div className="homeImg">
          <div className="imgBlockChain">
            <img src="/images/blockChain.jpg" />
          </div>
        </div>
        <div className="homeImg">
          <div>
            <img src="/images/amdIntel1.jpg" />
          </div>
          <div>
            <img src="/images/amdIntel2.jpg" />
          </div>
        </div>
      </div>
      <div className="categoryCards">
        <div className="item" style={{ width: "320px" }}>
          <div className="card1">
            <div className="logo1">
              <img src="/images/logoHomeGforce.png" alt="AMD" />
            </div>
            <div className="products">
              <div className="item">
                <a href="#">
                  <img
                    src="/images/gt1030.jpg"
                    alt="micro-amd-ryzen-5-5600g"
                    style={{ width: "90px", height: "90px" }}
                  />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img
                    src="/images/gtrtx3090.jpg"
                    alt="video-radeon-rx-6600-msi-armor-2x"
                    style={{ width: "90px", height: "90px" }}
                  />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img
                    src="/images/gtx1650.jpg"
                    alt="Gforce gtx1650"
                    style={{ width: "90px", height: "90px" }}
                  />
                </a>
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
                <a href="#">
                  <img
                    src="/images/intelg5400.jpg"
                    alt="intel g5400"
                    style={{ width: "90px", height: "90px" }}
                  />
                </a>
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
                <a href="#">
                  <img
                    src="/images/intel9600.jpg"
                    alt="intel9600"
                    style={{ width: "90px", height: "90px" }}
                  />
                </a>
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
                    alt="ssd 30"
                    style={{ width: "90px", height: "90px" }}
                  />
                </span>
              </div>
              <div className="item">
                <a href="#">
                  <img
                    src="/images/ssdSata3.jpg"
                    alt="ssd Sata 3"
                    style={{ width: "90px", height: "90px" }}
                  />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img
                    src="/images/ssd35.jpg"
                    alt="ssd 35"
                    style={{ width: "90px", height: "90px" }}
                  />
                </a>
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
    </>
  );
}
