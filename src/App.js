import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import DetailsPage from "./MoveDetails.js/DetailsPage";
import Login from "./HomeComponent/Login";
import Home from "./Screens/Home";
function App() {
  return (
    <div className="h-full bg-black w-screen">
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/details" element={<DetailsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
