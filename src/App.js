import React from "react";
import DarkHome from "./components/dark/home/index"
import Manageleccsharp from "./components/dark/manageleccsharp";
import PageNotfound from "./components/dark/pagenotfound";

import {
  BrowserRouter,
  Routes,
  Route,
 } from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DarkHome/>} />
      <Route path="/calcjs" element={<DarkHome/>} />
      <Route path="/manageleccsharp" element={<Manageleccsharp/>} />
      <Route path="/*" element={<PageNotfound/>} />
    </Routes>
  </BrowserRouter>
)}

export default App
