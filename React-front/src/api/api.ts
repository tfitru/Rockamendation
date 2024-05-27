import axios, { AxiosRequestConfig } from 'axios'
import { useQuery } from 'react-query';

export const useGetRocks = () => {
    const getRocks = async () => {
        const response = await axios.get<Route[]>("http://localhost:8080/Rock/AllRoutes");
        return response.data;
    }

    return useQuery(['rocks'], () => getRocks())
}

export interface Route {
    id: number,
    area: string,
    crag: string,
    description: string,
    gorge: string,
    grading: string,
    route: string,
    state: string,
    subCrag: string,
    url: string
}

