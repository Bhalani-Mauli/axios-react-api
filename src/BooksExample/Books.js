import React from "react";

const Books = (props) => {
  return (
    <div>
      <h1>Books</h1>
      {props.value.map((i) => {
        return (
          <>
            <h3>{i.title}</h3>
            <p>{i.body}</p>
          </>
        );
      })}
    </div>
  );
};

export { Books };
