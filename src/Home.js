import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/city">CityParent</Link>
      </li>
      <li>
        <Link to="/books">BooksParent</Link>
      </li>
      <li>
        <Link to="/marks">StudentsMarksParent</Link>
      </li>
      <li>
        <Link to="/shoppinglist">ShoppingListParent</Link>
      </li>
    </div>
  );
};
