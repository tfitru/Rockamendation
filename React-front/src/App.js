import logo from './logo.svg';
import './App.css';
import RockComponent from './RockComponent';
import LocationDropDown from './LocationDropDown';
import ButtonClick from './TestButton';
import Dropdown1 from './Dropdown1';
import Axios  from 'axios';
import {React, useState} from 'react';
import GradingAndLoc from './GradingAndLoc';
import BackgroundIMage from './BackgroundIm';
import Dropdown from './dropdown';


function App() {
  // const[state, setRockState] = useState("");

 

  

  return (
    <div className="App">
      {/* <GradingAndLoc /> */}

            
      <header className="container">
      {/* <Dropdown1 /> */}
      <Dropdown />
      {/* <LocationDropDown/> */}
      {/* <ButtonClick/>  */}
      <RockComponent />     

      </header>
    </div>
  );
}

export default App;
