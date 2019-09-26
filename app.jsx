import React from "react";
import ReactDOM from "react-dom";
import Congrats from "./congrats";
import Calculator from "./Calculator";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Calculator />, root);
});
