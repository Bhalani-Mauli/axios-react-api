import React, { useState, useEffect } from "react";
import ShoppingList from "./ShoppingList";
import axios from "axios";
import { AddShoppingItem } from "./AddShoppingItem";

export default function ShoppingListParent() {
  const [items, setItems] = useState([]);
  useEffect(async () => {
    const res = await axios.get("http://localhost:8081/api/shopping");
    console.log(res.data.items);
    setItems(res.data.items);
  }, []);
  return (
    <div>
      <ShoppingList shoppingList={items} />
      <AddShoppingItem setItems={setItems} />
    </div>
  );
}
