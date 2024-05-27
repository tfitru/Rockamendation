import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Route } from '../api/api';
import { UseQueryResult } from 'react-query';

const DataTable = (columns: GridColDef[], rows) => {
  return (
    <div className='dataTable'><DataGrid columns={columns} rows={rows} /></div>
  )
}

export default DataTable