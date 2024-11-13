import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.tsx';
import Tasks from './pages/Tasks.tsx';
import Pomodoro from './pages/Pomodoro.tsx';
import Dashboard from './pages/Dashboard.tsx';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Tasks" element={<Tasks />}/>
        <Route path="/Pomodoro" element={<Pomodoro />}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
