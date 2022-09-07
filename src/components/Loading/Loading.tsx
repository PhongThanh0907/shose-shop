import React from "react";
import "./loading.scss";

type Props = {
  name: string;
};

const Loading = (props: Props) => {
  return (
    <div className="loading-circle">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span>{props.name}</span>
    </div>
  );
};

export default Loading;
