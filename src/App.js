import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";

import Login from "./HomeComponent/Login";
import Home from "./Screens/Home";
import DetailsPage from "./Screens/DetailsPage";
function App() {
  return (
    <div className=" bg-black ">
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/details" element={<DetailsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
