import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/Home.js";
import ItemList from "./components/ItemList.js";
import Item from "./components/Item.js";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Greg Poirier's Emporium of Awesome Junk</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/item-list">Shop</Link>
        </div>
      </nav>
      <Route exact path="/" component={Home} />
      <Route exact path="/item-list" component={ItemList} />
      <Route path="/item-list/:id" component={Item} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
