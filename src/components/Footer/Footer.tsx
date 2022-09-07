import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./footer.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div id="footer">
      <AnimationOnScroll animateIn="animate__fadeInUpBig">
      <div className="Footer__Logo">
        <img
          src="https://www.bstha.com.np/wp-content/uploads/2020/11/n-transparant.png"
          alt=""
        />
      </div>
      <div className="Footer__Content">
        <div className="Footer__Col">
          <div className="Footer__Store">
            <h2>STORE 1</h2>
            <span>
              <HomeIcon />
              <p>Số 59 đường 79, Phường Tân Quy, Q7, TPHCM</p>
            </span>

            <span>
              <PhoneIcon />
              <p>0982 883 789</p>
            </span>
          </div>
          <div className="Footer__Store">
            <h2>STORE 2</h2>
            <span>
              <HomeIcon />
              <p>Số 379 Đoàn Văn Bơ, P14, Q4, TPHCM</p>
            </span>
           
            <span>
              <PhoneIcon />
              <p>0934 567 899</p>
            </span>
            
          </div>
        </div>
        <div className="Footer__Col">
          <h2>THÔNG TIN</h2>
          <div className="Footer__List">
            <ul>
              <li className="option">
                <a href="#banner">Trang Chủ</a>
              </li>
              <li className="option">
                <a href="#about">Sneaker</a>
              </li>
              <li className="option">
                <a href="#skills">Tin Tức</a>
              </li>
              <li className="option">
                <a href="#portfolio">Giới Thiệu</a>
              </li>
              <li className="option">
                <a href="#portfolio">Liên Hệ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Footer__Col">
          <h2>HỖ TRỢ</h2>
          <ul>
            <li className="option">
              <a href="#banner">Chính Sách Giao Hàng</a>
            </li>
            <li className="option">
              <a href="#about">Chính Sách Đổi Trả</a>
            </li>
            <li className="option">
              <a href="#skills">Chính Sách Bảo Mật</a>
            </li>
            <li className="option">
              <a href="#portfolio">Điều Khoản Dịch Vụ</a>
            </li>
          </ul>
        </div>
        <div className="Footer__Col">
          <h2>FANPAGE</h2>
          <p>Theo dõi Fanpage để nhận được thông tin ưu đãi sớm nhất</p>
          <div className="Footer__Icon">
            <ul>
              <li className="option">
                <a href="#banner">
                  <FacebookIcon />
                </a>
              </li>
              <li className="option">
                <a href="#about">
                  <TwitterIcon />
                </a>
              </li>
              <li className="option">
                <a href="#skills">
                  <YouTubeIcon />
                </a>
              </li>
              <li className="option">
                <a href="#portfolio">
                  <InstagramIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Footer;
