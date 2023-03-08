import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from './logo.svg';

import './App.css';
import ExtraTRy from './ExtraTRy';
import Home from './components/pages/Home';
import VideoGrid from './components/pages/VideoGrid';
import NavBar from './components/navBar/NavBar';
import HomeTwo from './components/Mostliked/HomeTwo';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hometwo" element={<HomeTwo />} />
        <Route path="/blogs/:id" element={<VideoGrid />} />
      </Routes>
      {/* <HomeTwo></HomeTwo> */}
      {/* <Home></Home> */}
    </Router>
  );
}

export default App;
