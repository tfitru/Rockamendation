
import Button from '@mui/material/Button';
import axios from 'axios'
import {useState, useEffect} from 'react'
import * as React from 'react';
import StickyHeader from 'react-sticky-header'


function RockAmendationComp(){
    const[gradeLocationRocks, setGradeLocationRocks] = useState([]);
    const[gradeRocks, setGradeRocks] = useState([]);


  const allRockData = async() =>{
    const response = await axios.get("http://localhost:8080/Rock/AllRoutes")
  }

  useEffect(function(){
      allRockData()
  }, []);


 

 const andd1Change = (e) => {
      axios
          .get(`http://localhost:8080/Rock/StateRoutes/` + e.target.value)
          .then((response) => setGradeLocationRocks(response.data))
          .then((error) => console.log(error));
  }


  const gradeChange = (event) => {
    axios
        .get(`http://localhost:8080/Rock/AllRoutes/` + event.target.value)
        .then((response) => console.log(response.data))
        .then((error) => console.log(error));
}

  return(
    
    <div >
        
            
                

          
       <header className="sticky-inner">
    

        <h2>
          <Button variant = "contained" onClick={andd1Change} value="Delaware" className='de'> Delaware </Button>
          <Button variant = "contained" onClick={andd1Change} value="New Jersey" className='nj'> New Jersey </Button>
          <Button variant = "contained" onClick={andd1Change} value="Pennsylvania" className='pa'> Pennsylvania </Button>
        </h2>
        <h3>
          <Button variant = "contained" onClick={gradeChange} value="V0" className='V0'> V0 </Button>
          <Button variant = "contained" onClick={gradeChange} value="V5" className='V5'> V5 </Button>
          <Button variant = "contained" onClick={gradeChange} value="V10" className='V10'> V10 </Button>
        </h3>
       
            
     
      <h1 className="text-center" >RockAmendation</h1>
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
                    <link href={rock.url}><td onClick={rock.url}>{rock.url}</td></link>
                    </tr>
                  ))
                    
                  }
      
                </tbody>
            </table>
            </div>
  )



}

export default RockAmendationComp;