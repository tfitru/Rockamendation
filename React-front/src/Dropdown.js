import React, { useState } from 'react'
import RockService from './RockService'
import axios from 'axios'
import Select from 'react-select'
import "./App.css"


export default class Dropdown extends React.Component{

    render() {
        return (
            <div>
            <header>
                <select className="custom-select">
                  <option>VB</option>
                  <option>V0</option>
                  <option>V0-</option>
                  <option>V0+</option>
                  <option>V0-1</option>
                  <option>V1</option>
                  <option>V1+</option>
                  <option>V1-2</option>
                  <option>V2-</option>
                  <option>V2</option>
                  <option>V2-3</option>
                  <option>V2+</option>
                  <option>V3</option>
                  <option>V3+</option>
                  <option>V3-4</option>
                  <option>V4</option>
                  <option>V4-</option>
                  <option>V4+</option>
                  <option>V4-5</option>
                  <option>V5</option>
                  <option>V5-</option>
                  <option>V5+</option>
                  <option>V6</option>
                  <option>V6+</option>
                  <option>V6-7</option>
                  <option>V7</option>
                  <option>V7-</option>
                  <option>V7-8</option>
                  <option>V8</option>
                  <option>V8-</option>
                  <option>V8+</option>
                  <option>V8-9</option>
                  <option>V9</option>
                  <option>V10</option>
                  <option>V11</option>
                </select>
              </header>
              </div>
        )


}
}

