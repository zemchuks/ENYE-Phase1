import React, { Fragment, useEffect, useState } from "react";
import SearchBar from './components/header/SearchBar'
import Records from './components/records/Records'
import Pagination from './components/Pagination'
import { SEARCH } from './components/searchFuntion'
import Footer from './components/Footer'
import './App.css'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import 'material-design-icons/iconfont/material-icons.css'

const App = () => {
  const [records, setRecords] = useState('')
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(20)
  const [filterByWhat, setFilterByWhat] = useState('')
  const [isFilter, setIsFilter] = useState(false)

    useEffect(() => {
      M.AutoInit()
        const fetchRecords = async () => {
          setLoading(true)
          const res = await fetch('./db.json')
          const data  = await res.json();
          console.log(data);
          setRecords(data.records)
          setLoading(false)
          
        }
      fetchRecords()
    
      // eslint-disable-next-line
    }, []) 

  // Get current records
  const indexOfLastRecord = currentPage * recordsPerPage // should give the index of the last records
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage // should give the index of the first records
  // Get current records
  const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord) // Slices out the number of records per page

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const onSearch = (e) =>  {
    SEARCH(e)
  }
  const onSelect = filter => {
   setFilterByWhat(filter)
   setIsFilter(true)
  }

  const clearFilter = () => {
    setIsFilter(false)
  }

    return (
      <Fragment>
         <div className='app-container'>
          <SearchBar onSearch={onSearch}  />
 
        
        <Records records={currentRecords} loading={loading} filterByWhat={filterByWhat} isFilter={isFilter}  clearFilter={clearFilter} onSelect={onSelect}  />
        <Pagination recordsPerPage={recordsPerPage} totalRecords={records.length} paginate={paginate} />
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <Footer />
        
      </Fragment>
    )
    
  }
  
export default App;