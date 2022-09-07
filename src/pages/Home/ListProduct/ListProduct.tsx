import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./listproduct.scss";

type Props = {};

const ListProduct = (props: Props) => {
  return (
    <div id="listproduct">
      <AnimationOnScroll animateIn="animate__bounceIn ">
        <div className="List__Product">
          <div className="col">
            <div className="col__nike">
              <img src="./img/list-nike.jpg" alt="" />
              <div className="col__text">
                <h2>NIKE</h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="col__adiddas">
              <img src="./img/list-adidas.jpg" alt="" />
              <div className="col__text">
                <h2>ADIDAS</h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="col__puma">
              <img src="./img/list-puma.jpg" alt="" />
              <div className="col__text">
                <h2>PUMA</h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="col__bitis">
              <img src="./img/list-bitis.jpg" alt="" />
              <div className="col__text">
                <h2>BITI'S</h2>
              </div>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default ListProduct;
