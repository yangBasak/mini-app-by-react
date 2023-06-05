import React from "react";
import { BrowserRouter, Route, Routes, NavLink, Link } from "react-router-dom";
import "./App.css";
import PageHome from "./pages/pageHome";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">home</Link>
      <Routes>
        <Route key="key1" path="/" element={<PageHome></PageHome>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
