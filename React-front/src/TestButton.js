import React from 'react'
import axios from 'axios'
import GetFun, { validRocks } from './GetFun'

export default class ButtonClick extends React.Component{
    constructor(props) {
        super(props)
    
        this.state={
            rocks:[]
        };
    }


    
    

componentDidMount(){
    axios.get('http://localhost:8080/Rock/V0/Delaware')
    .then(res => {
        const rocks = res.data;
        this.setState({rocks});
    })
}



render(){
    return(
        <ul>
            {
                this.state.rocks
                .map(rock => (
                    <li key={rock.id} >{rock.route} {rock.url}</li>
                ))
            }
        </ul>
    )
}


}

validRocks("VO", "Delaware");

