import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import App from "./js/app";
import Form from "./js/form";

ReactDOM.render(
  <HashRouter>
    {/* <App /> */}
    <Routes>
      {/* <div> */}
      <Route path="/*" element={<App />}>
        <Route index element={""} />
        <Route path="asd" element={<Form />} />
      </Route>

      {/* <Route path="/secondPage" component={SecondPage} /> */}
      {/* </div> */}
    </Routes>
  </HashRouter>,
  document.getElementById("root")
);
