/* import { square } from "./utils";
console.log("Hey there, its webpack. With live reload");

let double = square(2);

console.log(double); */
//Libraries
import React from "react";
import ReactDOM from "react-dom";

//Import CSS
import "./styles/styles.scss";

import AppRouter from "./routers/AppRouter";

var app = document.getElementById("app");

ReactDOM.render(<AppRouter />, app);
