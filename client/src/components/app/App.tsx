import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../header/header";
import SideNav from "../side-navigation/side-navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SideNav />
        <Routes>
          <Route path="/home" />
          <Route path="/new-release" />
          <Route path="/about" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
