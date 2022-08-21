import axios from 'axios'

const ROCK_API_REST = "http://localhost:8080/Rock/allB";

class RockService{

    getRocks(){
        return axios.get(ROCK_API_REST);
    }

}

export default new RockService();