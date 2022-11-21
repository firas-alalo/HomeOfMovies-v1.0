import './App.css';
import React from 'react';
import HomePage from './Genres/Home';
import Navigation from './Components/Navigation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActionPage from './Genres/Action';
import ComedyPage from './Genres/Comedy';
import ThrillerPage from './Genres/Thriller';
import WarPage from './Genres/War';
import RomancePage from './Genres/Romance';
import DramaPage from './Genres/Drama';
import CrimePage from './Genres/Crime';
import HorrorPage from './Genres/Horror';
import DocumentaryPage from './Genres/Documentary'

function App() {
  return (

<div>
  <BrowserRouter>
  <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/action" element={<ActionPage />} />
        <Route path="/comedy" element={<ComedyPage />} />
        <Route path="/thriller" element={<ThrillerPage />} />
        <Route path="/war" element={<WarPage />} />
        <Route path="/romance" element={<RomancePage />} />
        <Route path="/drama" element={<DramaPage />} />
        <Route path="/crime" element={<CrimePage />} />
        <Route path="/documentary" element={<DocumentaryPage />} />
        <Route path="/horror" element={<HorrorPage />} />
      </Routes>
    </BrowserRouter>
</div>
  );
}



export default App;
