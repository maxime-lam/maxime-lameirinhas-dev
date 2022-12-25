import React from "react";
import DarkHome from "./components/dark/home/index"
import Menageleccsharp from "./components/dark/menageleccsharp";

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
      <Route path="/menageleccsharp" element={<Menageleccsharp/>} />
    </Routes>
  </BrowserRouter>
)}

export default App
