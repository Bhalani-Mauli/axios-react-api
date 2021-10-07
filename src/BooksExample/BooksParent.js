import React, { useState, useEffect } from "react";
import { Books } from "./Books";
import axios from "axios";

export default function BooksParent() {
  const [books, setBooks] = useState([]);
  const [addTitle, setAddTitle] = useState("");
  const [addBody, setAddBody] = useState("");

  useEffect(async () => {
    const res = await axios.get("http://localhost:8081/api/books");
    setBooks(res.data.books);
  }, []);

  const submit = async () => {
    const res = await axios.post("http://localhost:8081/api/books", {
      title: addTitle,
      body: addBody,
    });
    setBooks(res.data.books);
    setAddTitle("");
    setAddBody("");
  };

  return (
    <div>
      <Books value={books} />
      <lable>Title</lable>
      <input
        type="text"
        value={addTitle}
        onChange={(e) => setAddTitle(e.target.value)}
      />
      <br />
      <label>Body</label>
      <input
        type="text"
        value={addBody}
        onChange={(e) => setAddBody(e.target.value)}
      />
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
