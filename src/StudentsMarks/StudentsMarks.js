import React from "react";

const StudentsMarks = (props) => {
  return (
    <div>
      <h1>StudentsMarks</h1>
      <table>
        <th>Name</th>
        <th>Physics</th>
        <th>Chemestry</th>
        <th>Maths</th>
        <tbody>
          {props.value.map((i) => {
            return (
              <tr>
                <td>{i.name}</td>
                <td>{i.physics}</td>
                <td>{i.chemestry}</td>
                <td>{i.maths}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { StudentsMarks };
