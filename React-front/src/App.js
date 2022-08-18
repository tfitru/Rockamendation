import logo from './logo.svg';
import './App.css';
import RockComponent from './RockComponent';
import Dropdown from './Dropdown';
import LocationDropDown from './LocationDropDown';
import ButtonClick from './TestButton';

function App() {
  // const[state, setRockState] = useState("");

  return (
    <div>
      <header className="container">
      <Dropdown />
      <LocationDropDown/>
      <ButtonClick/> 
      {/* <RockComponent /> */}
      </header>
    </div>
  );
}

export default App;
