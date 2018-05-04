/* import { square } from "./utils";
console.log("Hey there, its webpack. With live reload");

let double = square(2);

console.log(double); */
//Libraries
import React from "react";
import ReactDOM from "react-dom";

//Components
import TodoApp from "./components/TodoApp";

//Import CSS
import "./styles/styles.scss";

var app = document.getElementById("app");

ReactDOM.render(<TodoApp />, app);
