import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./news.scss";

type Props = {};

const New = (props: Props) => {
  return (
    <div id="news">
      <AnimationOnScroll animateIn="animate__fadeInTopRight">
        <div className="New__Title">
          <h1>TIN TỨC</h1>
        </div>
        <div className="New__Content">
          <div className="New__Col">
            <div className="New__Item">
              <div className="New__Img">
                <img src="./img/img-new-3.jpg" alt="" />
              </div>
            </div>
            <div className="New__Des">
              <p>#N's store26/8/2022</p>
              <h4>
                Hướng dẫn cách phân biết giày Nike Air Force 1 thật hay giả
              </h4>
            </div>
          </div>
          <div className="New__Col">
            <div className="New__Item">
              <div className="New__Img">
                <img src="./img/img-new-2-1.jpg" alt="" />
              </div>
            </div>
            <div className="New__Des">
              <p>#N's store21/8/2022</p>
              <h4>Hàng SF là gì? Hàng Rep 1:1 là hàng gì?</h4>
            </div>
          </div>
          <div className="New__Col">
            <div className="New__Item">
              <div className="New__Img">
                <img src="./img/img-new-4-1.jpg" alt="" />
              </div>
            </div>
            <div className="New__Des">
              <p>#N's store19/8/2022</p>
              <h4>Khám phá đôi giày Nike air max 270 “Dusty Cactus”</h4>
            </div>
          </div>
          <div className="New__Col">
            <div className="New__Item">
              <div className="New__Img">
                <img src="./img/img-new-5-1.jpg" alt="" />
              </div>
            </div>
            <div className="New__Des">
              <p>#N's store12/8/2022</p>
              <h4>Ultraboost 22: Do phụ nữ tạo cho cộng đồng nữa chạy</h4>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default New;
