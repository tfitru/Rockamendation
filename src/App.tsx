import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
     <List />
    </div>
  );
}

export default App;
