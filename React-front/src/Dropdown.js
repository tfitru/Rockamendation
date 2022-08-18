import React, { useState } from 'react'
import RockService from './RockService'
import axios from 'axios'
import Select from 'react-select'
import "./App.css"
import GetFun, { validRocks } from './GetFun'


export default class Dropdown extends React.Component{

  submit = (event) => {
    console.log('Selected value:', event.target.value)
  }
  submitLoc = (event) => {
    console.log('Selected value:', event.target.value)
  }

    render() {
        return (
            <div>
            <header>
                <select className="custom-select" onChange={this.submit}>
                  <option></option>
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
                <select className="custom-select"  onChange={this.submitLoc}>
                  <option>New Jersey</option>
                  <option>Pennsylvania</option>
                  <option>Delaware</option>
                </select>
              </header>
              </div>
        )
}
}

 validRocks(this.submit, this.submitLoc);


