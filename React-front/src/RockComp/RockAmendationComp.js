
import Button from '@mui/material/Button';
import axios from 'axios'
import {useState, useEffect} from 'react'
import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


function RockAmendationComp(){

  
  // create a pagination table in the back end and front end

  // Set up my getters and setters
    const[gradeLocationRocks, setGradeLocationRocks] = useState([]);

    // get all my rock data from my api
  const allRockData = async() =>{
    const response = await axios.get("http://localhost:8080/Rock/AllRoutes")
  }

  // use all my rock data from my api
  useEffect(function(){
      allRockData()
  }, []);


 
// action listener event to change the list based on the state value
 const andd1Change = (e) => {
      axios
          .get(`http://localhost:8080/Rock/StateRoutes/` + e.target.value)
          .then((response) => setGradeLocationRocks(response.data))
          .then((error) => console.log(error));
  }


  // change action listener event to change based on the grade button
  const gradeChange = (event) => {
    axios
        .get(`http://localhost:8080/Rock/AllRoutes/` + event.target.value)
        .then((response) => console.log(response.data))
        .then((error) => console.log(error));
}

  return(
    
    <div >
        
       <header>

        <h2>
          <Button variant = "contained" onClick={andd1Change} value="Delaware" className='de'> Delaware </Button>
          <Button variant = "contained" onClick={andd1Change} value="New Jersey" className='nj'> New Jersey </Button>
          <Button variant = "contained" onClick={andd1Change} value="Pennsylvania" className='pa'> Pennsylvania </Button>
          <h1>RockAmendation</h1>
        </h2>
     
      </header>  

             <table className="table table-striped" >
                <thead>
                    <tr>
                        <th>Route</th>
                        <th>Grading</th>
                        <th>Gorge</th>
                        <th>URL</th>
                    </tr>
                </thead>

                <tbody>
                  {gradeLocationRocks.map((rock) => (
                    <tr key={rock.id}>
                    <td>{rock.route}</td>
                    <td>{rock.grading}</td>
                    <td>{rock.gorge}</td>
                    <td onClick={rock.url}>{rock.url}</td>
                    </tr>
                  ))
                    
                  }
      
                </tbody>
            </table>
            </div>
           
  )




}

export default RockAmendationComp;