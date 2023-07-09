import React, {useEffect} from 'react'
import { useQuery } from 'react-query';
import { Route, useGetRocks } from '../api/api';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import './componentscss/List.css'
import UserClimb from './UserClimb';

interface BasicRoute {
  id: number,
  route: string,
  grading: string,
  state: string,
  url: string
}

const List = () => {

  const getRocks = useGetRocks();

  const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: "route", headerName: 'Route', width: 300},
    {field: "state", headerName: 'State', width: 120},
    {field: 'grading', headerName: 'Grading', width: 80},
    {field: 'url', headerName: 'Url', width: 500}    
]

const rowRocks = ()=> {
  
  const routes:BasicRoute[] = []
  getRocks.data?.forEach(route => {routes.push({id: route.id, route: route.route, grading: route.grading, state: route.state, url: route.url})})  

  return routes;
};



const rows = rowRocks();


// need to have another box on the other side to show the extra details on hover for each route

// Another box below to show the climbs the person wants to complete and completed climbs

// TODO: need to figure out how to make page dynamic fit and get the tables to line up well side by side
// TODO: create user table to store username, pasword (encryption and uncryption), store list of completed climbs and uncompleted climbs
// TODO: set up the routes for each page


  return (
    <div  >
      <div className='rocklist' ><DataGrid 
    columns={columns} 
    rows={rows} 
    checkboxSelection
     />
     </div>
     {/* <div className='userlist'>
      <UserClimb />
     </div> */}
     </div>
  )
}

export default List