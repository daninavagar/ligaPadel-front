import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Clasification from './components/Clasification'
import Teams from './components/Teams'
import Players from "./components/Players";
import Round from './components/Round'
import Header from './components/Header'
import './App.css'

function App() {

  return (
    <main className="px-36">
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/clasification" />} />
          <Route path="/clasification" element={<Clasification/>}/>
          <Route path="/round" element={<Round/>}/>
          <Route path="/teams" element={<Teams/>}/>
          <Route path="/teams" element={<Teams/>}/>
          <Route path="/players" element={<Players/>}/>
        </Routes>
      </Router>
    </main>
  )
}

export default App
