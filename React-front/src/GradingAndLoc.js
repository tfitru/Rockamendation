
import Axios from "axios";
import { React, useState } from "react";

function GradingAndLoc(){
const [data, setData] = useState("");
const [grade, setGrade] = useState("");
const [location, setLocation] = useState("");

function getRocks(){
  Axios.get(`http://localhost:8080/Rock${grade}/${location}`
  ).then((response)=>{
    setData(response.data)
  });
}

return(
    <div className="App">
        <h1></h1>
        <div className="list">
         <h1></h1>
      <select className="custom-select1" >
                  <option></option>
                  <option data-isd="0" value="VB">VB</option>
                  <option data-isd="1" value="V0">V0</option>
                  <option data-isd="2" value="V0-">V0-</option>
                  <option data-isd="3" value="V0+">V0+</option>
                  <option data-isd="4" value="V0-1">V0-1</option>
                  <option data-isd="5" value="V1">V1</option>
                  <option data-isd="6" value="V1+">V1+</option>
                  <option data-isd="7" value="V1-2">V1-2</option>
                  <option data-isd="8" value="V2-">V2-</option>
                  <option data-isd="9" value="V2">V2</option>
                  <option data-isd="10" value="V2-3">V2-3</option>
                  <option data-isd="11" value="V2+">V2+</option>
                  <option data-isd="12" value="V3">V3</option>
                  <option data-isd="13" value="V3+">V3+</option>
                  <option data-isd="14" value="V3-4">V3-4</option>
                  <option data-isd="15" value="V4">V4</option>
                  <option data-isd="16" value="V4-">V4-</option>
                  <option data-isd="17" value="V4+">V4+</option>
                  <option data-isd="18" value="V4-5">V4-5</option>
                  <option data-isd="19" value="V5">V5</option>
                  <option data-isd="20" value="V5-">V5-</option>
                  <option data-isd="21" value="V5+">V5+</option>
                  <option data-isd="22" value="V6">V6</option>
                  <option data-isd="23" value="V6+">V6+</option>
                  <option data-isd="24" value="V6-7">V6-7</option>
                  <option data-isd="25" value="V7">V7</option>
                  <option data-isd="26" value="V7-">V7-</option>
                  <option data-isd="27" value="V7-8">V7-8</option>
                  <option data-isd="28" value="V8">V8</option>
                  <option data-isd="29" value="V8-">V8-</option>
                  <option data-isd="30" value="V8+">V8+</option>
                  <option data-isd="31" value="V8-9">V8-9</option>
                  <option data-isd="32" value="V9">V9</option>
                  <option data-isd="33" value="V10">V10</option>
                  <option data-isd="34" value="V11">V11</option>
                </select>
                <select className="custom-select"  >
                  <option></option>
                  <option data-isd="1" value="NewJersey">New Jersey</option>
                  <option data-isd="2" value="Pennsylvania">Pennsylvania</option>
                  <option data-isd="3" value="Delaware">Delaware</option>
                </select>
                <button
          onClick={() => {
            getRocks();
          }}
        ></button>
        </div>

    </div>
)

}

export default GradingAndLoc;