import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "pages/home";
import HeroList from 'pages/heroList';
import HeroProfile from 'pages/heroProfile';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/heroList" element={<HeroList />} />
      <Route path="/heroProfile/:heroId" element={<HeroProfile />} />
    </Routes>
  );
}