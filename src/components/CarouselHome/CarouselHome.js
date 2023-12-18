import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselHome = () => {
  return (
    <Carousel style={{ zIndex: "1", padding: 0 }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel1.png"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel2.png"
          alt="Second slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/carousel4.png"
          alt="Third slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;
