import React, { useState } from 'react'
import axios from 'axios'
import "./App.css"






export default class RockComponent extends React.Component{

constructor(props) {
    super(props)

    this.state={
        rocks:[]
    };
}


componentDidMount(){
    axios.get("http://localhost:8080/Rock/AllRoutes")
    .then(response => response.data)
    .then((data) => {
        this.setState({rocks: data});
    })
}

componentDidUpdate(){
    axios.get(`http://localhost:8080/Rock/AllRoutes`)
    .then(response => response.data)
    .then((data) => {
        this.setState({rocks:data})
    })
}





render() {
    return (
        <div class="button" >
            {/* <select className='custom-select'>{this.state.rocks.map((rock)=>(
                <><option>{rock.grading}</option></>
            ))}
            </select>
            <select className='custom-select'>{this.state.rocks.map((rock)=>(
                <><option>{rock.state}</option></>

            ))}
            </select> */}

            <h2 className="text-center">Climbing Details</h2>
            <table className="table table-striped" >
                <thead>
                    <tr>
                        <th>Route</th>
                        <th>Grading</th>
                        <th>State</th>
                        <th>URL</th>
                    </tr>
                </thead>

                <tbody style={{backgroundImage: "url(public/2010874.png"}}>
                    {this.state.rocks.length ===0 ?
                    <tr align="center">
                        <td colSpan='6'>Climbing</td>
                    </tr> : 
                    this.state.rocks.map((rock) => (
                        <tr key={rock.id}>
                            <td>{rock.route}</td>
                            <td>{rock.grading}</td>
                            <td>{rock.state}</td>
                            <td>{rock.url}</td>


                        </tr>
                    ))

                    
                
                
                
                
                }
                </tbody>
            </table>
        </div>
    )
}

}