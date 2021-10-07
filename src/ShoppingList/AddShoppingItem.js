import axios from "axios";
import React, { useState } from "react";

export const AddShoppingItem = (props) => {
  const [addImage, setAddImage] = useState("");
  const [addName, setAddName] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const [addPrice, setAddPrice] = useState("");

  //   console.log(props, "add");

  const submit = async () => {
    const res = await axios.post("http://localhost:8081/api/shopping", {
      image: addImage,
      name: addName,
      description: addDescription,
      price: addPrice,
    });
    // console.log(res, "res");
    props.setItems(res.data.items);
    setAddImage("");
    setAddName("");
    setAddDescription("");
    setAddPrice("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Image URL"
        value={addImage}
        onChange={(e) => setAddImage(e.target.value)}
      ></input>
      <br />
      <input
        type="text"
        placeholder="Name"
        value={addName}
        onChange={(e) => setAddName(e.target.value)}
      ></input>
      <br />
      <input
        type="text"
        placeholder="Description"
        value={addDescription}
        onChange={(e) => setAddDescription(e.target.value)}
      ></input>
      <br />
      <input
        type="text"
        placeholder="Price"
        value={addPrice}
        onChange={(e) => setAddPrice(e.target.value)}
      ></input>
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
};
