
import Button from '@mui/material/Button';
import axios from 'axios'
import {useState, useEffect} from 'react'

function RockAmendationComp(){
    const[gradeLocationRocks, setGradeLocationRocks] = useState([]);

  const allRockData = async() =>{
    const response = await axios.get("http://localhost:8080/Rock/AllRoutes")
    console.log(response.data);
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



  return(
    <div>
    <h1>
          <Button variant = "contained" onClick={andd1Change} value="Delaware" className='de'> Delaware </Button>
          <Button variant = "contained" onClick={andd1Change} value="New Jersey" className='nj'> New Jersey </Button>
          <Button variant = "contained" onClick={andd1Change} value="Pennsylvania" className='pa'> Pennsylvania </Button>
        </h1>
            
      <header className="container">        
      </header>
      <h2 className="text-center">RockAmendation</h2>
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
                    <td href={rock.url}>{rock.url}</td>
                    </tr>
                  ))
                    
                  }
                </tbody>
            </table>
            </div>
  )



}

export default RockAmendationComp;