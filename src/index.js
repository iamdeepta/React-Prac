import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Main from "./Main";

import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <StrictMode>
      <Main />
    </StrictMode>
  </BrowserRouter>,
  rootElement
);
