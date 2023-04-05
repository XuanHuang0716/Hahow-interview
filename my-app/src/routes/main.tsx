import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "pages/home";
import HeroList from 'pages/heroList';
import HeroProfile from 'pages/heroProfile';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/heroes" element={<HeroList />} />
      <Route path="/heroes/:heroId" element={<HeroProfile />} />
    </Routes>
  );
}