import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./pages/Calendar.tsx";
import Tasks from "./pages/Tasks.tsx";
import Pomodoro from "./pages/Pomodoro.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import Header from "./components/Header/Header.tsx";
import Settings from "./pages/Settings.tsx";
import Help from "./pages/Help.tsx";
import Profile from "./pages/Profile.tsx";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/Pomodoro" element={<Pomodoro />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Help" element={<Help/>} />
        <Route path="/Profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
