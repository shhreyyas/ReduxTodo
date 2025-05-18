import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../features/home/Home";
import NotFoundPage from "../features/notFoundPage/NotFoundPage";
import CreateUser from "../features/createUser/createUser";
import UpdateUser from "../features/updateUser/UpdateUser";
import SubscribeUser from "../features/SubscribeUser/SubscribeUser";

const MainRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/edit-user/:id" element={<UpdateUser />} />
        <Route path="/verify-user/:id" element={<SubscribeUser />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoot;
