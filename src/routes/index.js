import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../presentation/Home";
import SignIn from "../presentation/SignIn";

export default function router() {
  return (
    <BrowserRouter>
      {
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/form" element={<userForm />}></Route>
          <Route path="/login" element={<SignIn />}></Route>
        </Routes>
      }
    </BrowserRouter>
  );
}
