import React, { useState } from 'react'

const Pagination = ({ recordsPerPage, totalRecords, paginate }) => {
    const [activePage, setActivePage] = useState(0);
    // Page numbers should be empty at first
    const pageNumbers = []

    // loop through pagenumbers
    for(let i = 1; i <= Math.ceil(totalRecords / recordsPerPage); i++) {
        pageNumbers.push(i)
    }
    const handlePaginate = (index) => {
        setActivePage(index);
        paginate(index)
    }
    return (
        
        <ul className='pagination center'>
           <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
               {pageNumbers.map(number => (
                   <li key={number} style={{ marginLeft: '5px'}}>
                       <button className={activePage === number && 'active blue lighten-2 hoverable'} onClick={() => handlePaginate(number)}>
                         {number}
                       </button>
                   </li>
               ))}
            <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>

            
        </ul> 
    )
}

export default Pagination