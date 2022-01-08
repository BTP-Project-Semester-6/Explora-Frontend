import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./Pages/Admin/admin";
import Buddy from "./Pages/buddy/buddy";
import Challenge from "./Pages/Challenge/challenge";
import Home from "./Pages/home";
import Login from "./Pages/Login/login";
import Profile from "./Pages/Profile/Profile";
import GuideProfile from "./Pages/GuideProfile/GuideProfile";
import Landing from "./Pages/Landing/landing";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/buddy" element={<Buddy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/guideprofile/:id" element={<GuideProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
