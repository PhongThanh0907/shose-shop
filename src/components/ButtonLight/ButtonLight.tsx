import React from "react";
import "./buttonlight.scss";
import "animate.css";
import { Link } from "react-router-dom";

interface Props {
  name: string;
}

const ButtonLight = (props: Props) => {
  return (
    <button className="button-animation">
      <Link to="/products">
        {props.name}
      </Link>
    </button>
  );
};

export default ButtonLight;
