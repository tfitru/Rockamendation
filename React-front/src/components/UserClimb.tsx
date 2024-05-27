import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React from 'react'

const UserClimb = () => {


  const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: "route", headerName: 'Route', width: 300}
]


    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ]

    // climbs that the user has selected and stored in their list
    // a way to remove the completed climbs, but stored as a completed list
    // Need a list to hold selected climbs, another list to hold completed list


  return (
    <div style={{height: 200, width: '100%'}} ><DataGrid 
    columns={columns} 
    rows={rows} 
     /></div>
  )
}

export default UserClimb