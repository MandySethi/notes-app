import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

export default function Link() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />\
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
