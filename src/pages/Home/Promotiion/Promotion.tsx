import React, { useState, useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import CountDownTimer from "../../../components/CountDownTimer";
import "./promotion.scss";

interface Props {}

const Promotion = (props: Props) => {
  return (
    <div id="promotion">
      <AnimationOnScroll animateIn="animate__flipInX ">
        <div className="Promotion__Content">
          <div className="Promotion__Title">
            <h1>DEAL TRONG NGÀY</h1>
            <div className="Promotion__Countdown">
              <CountDownTimer hours={1} minutes={30} seconds={50} />
            </div>
            <h3>Nike Air Max 97</h3>
            <h4>SALE 35%</h4>
            <h4>1,990,000đ</h4>
            <span style={{ textDecoration: "line-through" }}>
              2,400,000đ
            </span>{" "}
            <br />
            <button>CHI TIẾT</button>
          </div>
          <div className="Promotion__Img">
            <div className="Shoes__Img">
              <img src="./img/sneaker-sale-2.jpg" alt="" />
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Promotion;
