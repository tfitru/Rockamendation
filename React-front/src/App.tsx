import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import { SignUp } from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List /> } />
          <Route path="/signup" element={<SignUp/>} />
       </Routes>
       </div>
  );
}

export default App;
