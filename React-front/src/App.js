import logo from './logo.svg';
import './App.css';
import RockComponent from './RockComponent';
import Dropdown from './Dropdown1';
import LocationDropDown from './LocationDropDown';
import ButtonClick from './TestButton';
import Dropdown1 from './Dropdown1';
import Axios  from 'axios';
import {React, useState} from 'react';
import GradingAndLoc from './GradingAndLoc';
import BackgroundIMage from './BackgroundIm';


function App() {
  // const[state, setRockState] = useState("");

 

  

  return (
    <div className="App">
      {/* <GradingAndLoc /> */}
            
            
      <header className="container">
      {/* <Dropdown1 /> */}

      {/* <LocationDropDown/> */}
      {/* <ButtonClick/>  */}
      <RockComponent />     

      </header>
    </div>
  );
}

export default App;
