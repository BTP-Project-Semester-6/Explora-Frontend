import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./Pages/Admin/admin";
import Buddy from "./Pages/buddy/buddy";
import Challenge from "./Pages/Challenge/challenge";
import Home from "./Pages/home";
import Login from "./Pages/Login/login";
import Profile from "./Pages/Profile/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/admin" element={<Admin />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/buddy" element={<Buddy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
