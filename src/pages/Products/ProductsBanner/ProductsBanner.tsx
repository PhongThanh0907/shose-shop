import React from "react";
import "./productbanner.scss";

type Props = {};

const ProductsBanner = (props: Props) => {
  return (
    <div id="productsbanner">
      <div className="ProductsB__Content">
        <div className="ProductB__Title">
          <h1>N's Store</h1>
          <h4>The best place to buy shoes</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductsBanner;
