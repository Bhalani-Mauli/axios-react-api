import React, { useState, useEffect } from "react";
import { Cities } from "./Cities";
import axios from "axios";

export default function CityParent() {
  const [citiesList, setCitiesList] = useState([]);
  const [cityInput, setCityInput] = useState("");

  useEffect(async () => {
    try {
      const res = await axios.get("http://localhost:8081/api/cities", {});
      console.log(res.data);
      setCitiesList(res.data.cities);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const submit = async () => {
    const res = await axios.post("http://localhost:8081/api/cities", {
      city: cityInput,
    });
    console.log(res.data.cities, "add city");
    setCitiesList(res.data.cities);
  };

  return (
    <div>
      <Cities value={citiesList} />
      <br />
      <input
        type="text"
        value={cityInput}
        placeholder="add city"
        onChange={(e) => setCityInput(e.target.value)}
      />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
