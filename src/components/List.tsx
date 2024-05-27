import React, { useEffect, useState} from 'react'
import { useGetRocks } from '../api/api';
import './componentscss/List.css'
import DataTable from 'react-data-table-component';
import Header from './Header';

interface BasicRoute {
  id: number,
  route: string,
  grading: string,
  state: string,
  url: string
}


const List = () => {
  const getRocks = useGetRocks();
  const routes:BasicRoute[] = [];
  getRocks.data?.forEach(route => {routes.push({id: route.id, route: route.route, grading: route.grading, state: route.state, url: route.url})})  

  const [url, setUrl] = useState("");
  const [records, setRecords] = useState(routes)
  const [bool, setBool] = useState(true)
  
  
  const columns = [
    {
      name: "Route",
      selector: row => row.route,
      sortable: true
    },
    {
      name: "State",
      selector: row => row.state,
      sortable: true
    },
    {
      name: "Grading",
      selector: row => row.grading,
      sortable: true
    },
    {
      name: "URL",
      selector: row => <div onClick={(e) => {onSelect(e)}} >
        <a href={url} target="_blank" rel="noreferrer">{row.url}</a>
        </div>,
      sortable: true
    }
  ];
  
  const onSelect = (url: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setUrl(url.currentTarget.childNodes[0].textContent)
  }
  
  const handleFilterRoute = (event) => {
    const newData = routes.filter(row => {
      return row.route.toLowerCase().includes(event.target.value.toLowerCase());
    })
    setBool(false)
    setRecords(newData)
  }

  const handleFilterState = (event) => {
    const newData = routes.filter(row => {
      return row.state.toLowerCase().includes(event.target.value.toLowerCase());
    })
    setBool(false)
    setRecords(newData)
  }

  const handleFilterGrading = (event) => {
    const newData = routes.filter(row => {
      return row.grading.toLowerCase().includes(event.target.value.toLowerCase());
    })
    setBool(false)
    setRecords(newData)
  }

// TODO: create user table to store username, pasword (encryption and uncryption), store list of completed climbs and uncompleted climbs

  return (
    <>
      <>
      <Header />
      <div className='filterbar'>
      <label className="inputbox-route">Route:<input  type="text"  onChange={handleFilterRoute}></input></label>
      <label className="inputbox-state">State:<input  type="text" onChange={handleFilterState}></input></label>
      <label className="inputbox-grading">Grading:<input type="text" onChange={handleFilterGrading}></input></label>
      </div>
        <DataTable
        columns={columns}
        data={bool ? routes : records}
        selectableRows
        fixedHeader
        pagination
       />
     </>
     </>
  )
}

export default List