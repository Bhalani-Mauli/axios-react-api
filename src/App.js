import React, { useState, useEffect } from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CityParent from "./cityGetExample/CityParent";
import BooksParent from "./BooksExample/BooksParent";
import StudentsMarksParent from "./StudentsMarks/StudentsMarksParent";
import ShoppingListParent from "./ShoppingList/ShoppingListParent";
import { Home } from "./Home";

export default function App() {
  return (
    <Router>
      <Home />
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/city" component={CityParent} />
        <Route path="/books" component={BooksParent} />
        <Route path="/marks" component={StudentsMarksParent} />
        <Route path="/shoppinglist" component={ShoppingListParent} />
      </Switch>
    </Router>
  );
}
