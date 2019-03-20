import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {Store} from "./redux/store/store";
import App from "./Components/app";
import socketClientIo from "socket.io-client";
export let socket = socketClientIo("http://192.168.100.152:8080");

ReactDOM.render(<Provider store={Store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById("root"));