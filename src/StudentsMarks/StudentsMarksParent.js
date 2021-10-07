import React, { useState, useEffect } from "react";
import { StudentsMarks } from "./StudentsMarks";
import axios from "axios";

export default function StudentsMarksParent() {
  const [marks, setMarks] = useState([]);
  const [name, setName] = useState("");
  const [physicsMarks, setPhysicsMarks] = useState("");
  const [chemestryMarks, setChemestryMarks] = useState("");
  const [mathsMarks, setmathsMarks] = useState("");

  useEffect(async () => {
    const res = await axios.get("http://localhost:8081/api/marks");
    setMarks(res.data.marks);
  }, []);

  const submit = async () => {
    const res = await axios.post("http://localhost:8081/api/marks", {
      name: name,
      physicsMarks: physicsMarks,
      chemestryMarks: chemestryMarks,
      mathsMarks: mathsMarks,
    });
    setMarks(res.data.marks);
    setName("");
    setPhysicsMarks("");
    setChemestryMarks("");
    setmathsMarks("");
  };

  return (
    <div>
      <StudentsMarks value={marks} />
      <br />
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={physicsMarks}
        placeholder="Physics Marks"
        onChange={(e) => setPhysicsMarks(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={chemestryMarks}
        placeholder="Chemistry Marks"
        onChange={(e) => setChemestryMarks(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={mathsMarks}
        placeholder="Maths Marks"
        onChange={(e) => setmathsMarks(e.target.value)}
      />
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
