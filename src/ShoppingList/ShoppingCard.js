import React from "react";
import "./card.css";

export const ShoppingCard = (props) => {
  // console.log(props, "card");
  return (
    <div className="card-wrapper">
      <img className="card-image" src={props.shoppingItem.image} />
      <h4 className="card-name">{props.shoppingItem.name}</h4>
      <p className="card-description">{props.shoppingItem.description}</p>
      <h3 className="card-price"> {props.shoppingItem.price}</h3>
    </div>
  );
};
