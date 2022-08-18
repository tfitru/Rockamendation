import axios from 'axios'

export async function validRocks(grading, location){
    
    const valid = axios.get(`localhost:808/Rock/${encodeURIComponent(grading)}/${encodeURIComponent(location)}`).then((response) => {
        return response;
    }).catch(e => {
        console.log(e)
    });
    console.log(valid);
}
