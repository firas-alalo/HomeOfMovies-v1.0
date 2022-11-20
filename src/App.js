import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActionPage from './Genres/Action';
import Navigation from './Components/Navigation';
import HomePage from './Genres/Home';
import ComedyPage from './Genres/Comedy';


function App() {
  return (

<div>
  <BrowserRouter>
  <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/action" element={<ActionPage />} />
        <Route path="/comedy" element={<ComedyPage />} />
        {/* <Route path="/thriller" element={<ThrillerPage />} />
        <Route path="/war" element={<WarPage />} />
        <Route path="/romance" element={<RomancePage />} />
        <Route path="/drama" element={<DramaPage />} />
        <Route path="/crime" element={<CrimePage />} />
        <Route path="/dodumentary" element={<DocumentaryPage />} />
        <Route path="/horror" element={<HorrorPage />} /> */}
      </Routes>
    </BrowserRouter>
</div>
  );
}

export default App;
