import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import HomeContainer from "screens/Home/container";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
