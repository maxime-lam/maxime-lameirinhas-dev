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
      <Route path="maxime-lameirinhas-dev/" element={<DarkHome/>} />
      <Route path="maxime-lameirinhas-dev/calcjs" element={<DarkHome/>} />
      <Route path="maxime-lameirinhas-dev/manageleccsharp" element={<Manageleccsharp/>} />
      <Route path="maxime-lameirinhas-dev/*" element={<PageNotfound/>} />
    </Routes>
  </BrowserRouter>
)}

export default App
