import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./Pages/Admin/admin";
import Buddy from "./Pages/buddy/buddy";
import Challenge from "./Pages/Challenge/challenge";
import Home from "./Pages/home";
import Login from "./Pages/Login/login";

import CreatePost from "./Pages/createPost/createPost";
import CreatBuddy from "./createBuddy/createBuddy";

import Profile from "./Pages/Profile/Profile";
import GuideProfile from "./Pages/GuideProfile/GuideProfile";
import Landing from "./Pages/Landing/landing";

import PrePlanningPost from "./Pages/prePlanningPost/prePlanningPost";
import CreateChallenge from "./Pages/createChallenge/createChallenge";

import Register from "./Pages/Register/register";

import Task from "./Pages/TaskPage/task";
import { VisitingPlaces } from "./Pages/VisitingPlaces/visitingPlaces";
import PrePlanning from "./Pages/PrePlanning/prePlanning";
import Navbar from "./Pages/navbar/navbar";

import AdminLogin from "./Pages/Admin/adminLogin";

import PersonalityQuiz from "./Pages/PersonalityQuiz/PersonalityQuiz";

import { Friends } from "./Pages/Friends/Friends";
import { FriendRequests } from "./Pages/Friends/FriendsRequest";
import LeaderBoard from "./Pages/LeaderBoard/leaderBoard";
import FriendSuggestion from "./Pages/FriendSuggestion/FriendSuggestion";
import { Feedback } from "./Pages/Feedback/feedback";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/adminlogin" element={<AdminLogin />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/buddy" element={<Buddy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/createChallenge" element={<CreateChallenge />} />

        <Route path="/createBuddy" element={<CreatBuddy />} />
        <Route path="/prePlanningPost" element={<PrePlanningPost />} />
        <Route path="/prePlanning" element={<PrePlanning />} />
        <Route path="/task/:id" element={<Task />} />
        <Route path="/places" element={<VisitingPlaces />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/guideprofile/:id" element={<GuideProfile />} />

        <Route path="/personalityquiz" element={<PersonalityQuiz />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/myfriends" element={<FriendRequests />} />
        <Route path="/suggestfriends" element={<FriendSuggestion />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
};

export default App;
