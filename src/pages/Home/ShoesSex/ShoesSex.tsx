import React from "react";
import ButtonColor from "../../../components/ButtonColor";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./shosesex.scss";

type Props = {};

const ShoesSex = (props: Props) => {
  return (
    <div id="sex">
      <div className="Shoses__Sex">
        <div className="Sex__Col">
          <AnimationOnScroll animateIn="animate__lightSpeedInLeft">
            <div className="Shoses__Men">
              <img src="./img/men.jpg" alt="" />
              <div className="Sex__Title">
                <ButtonColor name="MEN" id="#" />
              </div>
            </div>
          </AnimationOnScroll>
        </div>
        <div className="Sex__Col">
          <AnimationOnScroll animateIn="animate__lightSpeedInRight">
            <div className="Shoses__Woman">
              <img src="./img/women.jpg" alt="" />
              <div className="Sex__Title">
                <ButtonColor name="WOMEN" id="#" />
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};

export default ShoesSex;
