import React from "react";
import ReactDOM from "react-dom/client";

const name = "Joseph";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <h1>Created by {name}</h1>
    <p>Copyright {year}</p>
  </div>
);
