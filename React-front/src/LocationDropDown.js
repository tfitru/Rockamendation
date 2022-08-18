import React, { useState } from 'react'
import RockService from './RockService'
import axios from 'axios'
import Select from 'react-select'
import "./App.css"


export default class LocationDropDown extends React.Component{
  submit = (event) => {
    console.log('Selected value:', event.target.value)
  }

    render() {
        return (
            <div>
            <header>
                <select className="custom-select"  onChange={this.submit}>
                  <option>New Jersey</option>
                  <option>Pennsylvania</option>
                  <option>Delaware</option>
                </select>
              </header>
              </div>
        )
        

}
}