import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ChatBot from "./ChatBot";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/chatting" element={<ChatBot />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
