import React from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./form";
import Success from "./success";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}
