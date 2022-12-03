import React from "react";
import DarkHome from "./components/dark/home/index"
import CalcJs from './components/dark/body/projects/script-calcJs'

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
    </Routes>
  </BrowserRouter>
)}

export default App
