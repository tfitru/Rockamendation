import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List /> } />
       </Routes>
       </div>
  );
}

export default App;
