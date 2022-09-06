import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./js/app";
import Form from "./js/form";

ReactDOM.render(
  <HashRouter>
    <App />
    <Routes>
      {/* <div> */}
      <Route path="/" element={""} />
      <Route path="/asd" element={<Form />} />
      {/* <Route path="/secondPage" component={SecondPage} /> */}
      {/* </div> */}
    </Routes>
  </HashRouter>,
  document.getElementById("root")
);
