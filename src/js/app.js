import React, { Suspense, useState } from "react";
import "./app.css";
import axios from "axios";
import Item from "./item";
import Comp from "./comp";
import load from "../assets/asd.gif";
import {
  HashRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Form from "./form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowLeft,
  faArrowLeftLong,
  faBackspace,
  faBackward,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
// import {
//   solid,
//   regular,
//   brands,
//   icon,
// } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

// const { BrowserWindow } = require("electron");

// import img from "../assets/qwe.jpg";

export default function App() {
  const [userData, setUserData] = useState({});
  const [totData, setTotData] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  console.log("total data", totData);

  console.log("userData", userData);
  const loadItem = () => {
    setLoading(true);
    axios
      .get("https://randomuser.me/api/")
      .then(function (response) {
        // setUserData(response.data.results[0]);
        setTotData((prev) => [...prev, response.data.results[0]]);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const resetItem = () => {
    setTotData([]);
  };

  const openForm = () => {
    window.open("form.js", "Data", "width=600,height=400");
  };

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={() => navigate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button onClick={() => resetItem()}>Reset</button>
        <button onClick={() => loadItem()}>load user</button>
        <Link to="/asd">
          <button>Display card</button>
        </Link>
        <button onClick={() => openForm()} type="button" disabled>
          Form
        </button>
      </div>

      <div className="content">
        {/* <h1 className="asd">adasd asd asdasd asdasd kambing anak ayam</h1> */}
        <Outlet />
        <Item data={totData} />
      </div>

      {loading ? (
        <>
          {
            <div className="loader">
              <img src={load} width={80}></img>
            </div>
          }
        </>
      ) : (
        ""
      )}
      {/* </Suspense> */}
    </div>
  );
}
