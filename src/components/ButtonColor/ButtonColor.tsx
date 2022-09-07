import React from "react";
import "./buttoncolor.scss";

interface Props {
  id: string;
  name: string;
}

const ButtonColor = (props: Props) => {
  return (
    <div className="buttonlight">
      <a href={props.id}>
        {props.name}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
  );
};

export default ButtonColor;
