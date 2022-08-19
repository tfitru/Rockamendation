import logo from './logo.svg';
import './App.css';
import RockComponent from './RockComponent';
import Dropdown from './Dropdown1';
import LocationDropDown from './LocationDropDown';

function App() {
  // const[state, setRockState] = useState("");

  return (
    <div>
      <header className="container">
      <Dropdown />
      <LocationDropDown/>
      <RockComponent />
      </header>
    </div>
  );
}

export default App;
