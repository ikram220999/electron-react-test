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
  const [totData, setTotData] = useState({});
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(0);
  const [downloadImage, setDownloadImage] = useState(false);

  const navigate = useNavigate();

  // console.log("total data", totData);

  // console.log("userData", userData);
  const loadItem = () => {
    let ops = {
      method: "GET",
      url: "https://random-recipes.p.rapidapi.com/ai-quotes/1",
      headers: {
        "X-RapidAPI-Key": "10c4a0be16msh2920711b82ec721p1a77e9jsnef61e8089183",
        "X-RapidAPI-Host": "random-recipes.p.rapidapi.com",
      },
    };

    setLoading(true);
    axios
      .request(ops)
      .then(function (response) {
        // setUserData(response.data.results[0]);
        console.log(response.data[0]);
        setTotData(response.data[0]);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function notif() {
    electron.notificationApi.sendNotification("testing  !");
  }
  function notifyUser(asd) {
    setTimeout(function () {
      notif();
    }, asd);
  }

  const resetItem = () => {
    setTotData({});
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
        <button onClick={() => loadItem()}>load recipe</button>
        <input
          type="number"
          placeholder="seconds"
          onChange={(e) => setTime(e.target.value)}
        ></input>
        <button onClick={() => notifyUser(time * 1000)}>Notify</button>
        <Link to="/asd">
          <button>Display card</button>
        </Link>
        <button onClick={() => openForm()} type="button" disabled>
          Form
        </button>
        <button onClick={() => setDownloadImage(!downloadImage)} type="button">
          Download
        </button>
      </div>

      <div className="content">
        {/* <h1 className="asd">adasd asd asdasd asdasd kambing anak ayam</h1> */}
        <Outlet />
        <Item data={totData} download={downloadImage} />
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
