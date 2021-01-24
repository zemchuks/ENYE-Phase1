import React from 'react'

const Pagination = ({ recordsPerPage, totalRecords, paginate }) => {
    // Page numbers should be empty at first
    const pageNumbers = []

    // loop through pagenumbers
    for(let i = 1; i <= Math.ceil(totalRecords / recordsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        
        <ul className='pagination center'>
           <i className="fas fa-caret-left fa-3x"></i>{''}
               {pageNumbers.map(number => (
                   <li key={number} style={{ marginLeft: '5px'}}>
                       <button className='btn hoverable blue active' onClick={() => paginate(number)}>
                         {number}
                       </button>
                   </li>
               ))}
           {''} <i className="fas fa-caret-right fa-3x"></i>
            
        </ul> 
    )
}

export default Pagination