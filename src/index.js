import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import NavigationBar from "./Index/Index Components/navbar";
import Carousel from "./Index/Index Components/carousel";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<NavigationBar />, document.getElementById("nav"));
ReactDOM.render(<Jumbotron />, document.getElementById("jumbotron_container"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
