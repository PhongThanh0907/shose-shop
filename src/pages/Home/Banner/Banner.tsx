import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ButtonLight from "../../../components/ButtonLight";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
import "animate.css";
import "./banner.scss";

const Banner = () => {
  return (
    <div id="banner">
      <AnimationOnScroll
        initiallyVisible={true}
        animateIn="animate__fadeInTopLeft"
      >
        <div className="banner__carousel">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./img/banner_1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <ButtonLight name="XEM NGAY" />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./img/banner_2.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <ButtonLight name="XEM NGAY" />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./img/banner_3.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <ButtonLight name="XEM NGAY" />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./img/banner_4.jpg"
                alt="Four slide"
              />

              <Carousel.Caption>
              
                <ButtonLight name="XEM NGAY" />
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Banner;
