import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./Pages/Admin/admin";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
