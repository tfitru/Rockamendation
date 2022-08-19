import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Table} from 'react'

function Dropdown() {
    const [rocks, setRocks] = useState([]);
    const[gradeLocationRocks, setGradeLocationRocks] = useState([]);

    useEffect(function(){
        axios
        .get('http://localhost:8080/Rock/allB')
        .then((response)=> setRocks(response.data))
        .then((error) => console.log(error));
    }, []);

    const andd1Change = (e) => {
        axios
        .get(`http://localhost:8080/Rock/${e.target.value}/New%20Jersey`)
        .then((response)=> setGradeLocationRocks(response.data))
        .then((error) => console.log(error));
    }

    return(
        <div>
            <select className='form-control col-left-2' onSelect={andd1Change}>
                <option value="0" >Select Grade</option>
                {rocks.map((rock) => (
                    <option key={rock.id} value={rock.id}>
                        {rock.grading}
                        </option>
                ))}
                </select>
                {/* <select className='form-control col-left-2'>
                <option value="0">Select Location</option>
                {rocks.map((rock) => (
                    <option key={rock.id} value={rock.id}>
                        {rock.state}
                        </option>
                ))}
                </select> */}
            <br/><br/>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>Route</th>
                    <th>State</th>
                    <th>URL</th>
                </tr>
                </thead>

                    <tbody>
                        {
                        <tr>
                        <td>{gradeLocationRocks.route}</td>
                        <td>{gradeLocationRocks.state}</td>
                        <td>{gradeLocationRocks.url}</td>
                        </tr>
                        }
                    </tbody>
            </table>
        
        </div>
    )
}

export default Dropdown;