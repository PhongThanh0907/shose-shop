import React from "react";
import "./cardsneaker.scss";

type Props = {
  cardName: string;
  cardImg: string;
  cardPrice: number;
};

function format2(n: any, currency: any) {
  return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,") + currency;
}
const CardSneaker = ({ cardName, cardImg, cardPrice }: Props) => {
  return (
    <div className="Card__Sneaker">
      <img src={cardImg} alt="" />
      <h4>{cardName}</h4>
      <p>{format2(cardPrice, "đ")}</p>
    </div>
  );
};

export default CardSneaker;
