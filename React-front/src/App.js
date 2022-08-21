import './App.css';
import Button from '@mui/material/Button';
import axios from 'axios'
import {useState, useEffect} from 'react'

import { Table } from 'react-bootstrap'
import RockAmendationComp from './RockAmendationComp';


function App() {

  

  return (
    <div className="App">
      <RockAmendationComp/>
    </div>

  );
}

export default App;
