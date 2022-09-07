import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import "animate.css";
import "./header.scss";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="header" className={scrolled ? "scrolled" : ""}>
      <div className="header__content">
        <div className="mobile__menu" onClick={handleClick}>
          {click ? <CloseIcon /> : <FormatListBulletedIcon />}
        </div>
        <div className="header__logo">
          <Link to="/">
            <img
              src="https://www.bstha.com.np/wp-content/uploads/2020/11/n-transparant.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="header__nav">
          <ul className={click ? "nav__option active" : "nav__option"}>
            <li className="option">
              <Link to="/">TRANG CHỦ</Link>
            </li>
            <li className="option">
              <Link to="/products">SNEAKER</Link>
            </li>
            <li className="option">
              <a href="#skills">TIN TỨC</a>
            </li>
            <li className="option">
              <a href="#portfolio">GIỚI THIỆU</a>
            </li>
            <li className="option">
              <a href="#portfolio">LIÊN HỆ</a>
            </li>
          </ul>
        </div>
        <div className="header__service">
          <ul className="service__option">
            <li>
              <a href="">
                <SearchIcon />
              </a>
            </li>
            <li>
              <a href="">
                <PersonOutlineIcon />
              </a>
            </li>
            <li>
              <a href="">
                <FavoriteIcon />
              </a>
            </li>
            <li>
              <a className="cart" href="">
                <LocalMallIcon />
                <span className="cart__badge">0</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
