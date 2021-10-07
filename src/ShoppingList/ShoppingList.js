import React, { useState } from "react";
import { ShoppingCard } from "./ShoppingCard";

export default function ShoppingList(props) {
  console.log(props, "mnb");
  return (
    <div>
      <h1>Shopping</h1>
      <div className="shoppingList-wrapper">
        {props.shoppingList.map((shoppingItem) => {
          return <ShoppingCard shoppingItem={shoppingItem} />;
        })}
      </div>
    </div>
  );
}
