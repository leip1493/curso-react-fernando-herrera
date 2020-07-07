import React from "react";
import ReactDOM from "react-dom";
import PrimeraApp from "./PrimeraApp";
import CounterApp from "./Counterapp";


import "./index.css";

const divRoot = document.getElementById("root");

ReactDOM.render(<PrimeraApp saludo={"Hola Mundo"}/>, divRoot);
