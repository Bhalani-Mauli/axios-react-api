import React from "react";

const Cities = (props) => {
  console.log(props, props.value, "xyz");
  return (
    <div>
      <h1>Cities</h1>
      {props.value.map((city) => {
        return <li>{city}</li>;
      })}
    </div>
  );
};

export { Cities };
