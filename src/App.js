import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./Pages/Admin/admin";
import Buddy from "./Pages/buddy/buddy";
import Challenge from "./Pages/Challenge/challenge";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/admin" element={<Admin />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/buddy" element={<Buddy />} />
      </Routes>
    </Router>
  );
};

export default App;
