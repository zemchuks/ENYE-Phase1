import React, { useState } from 'react'
import RecordItem from './RecordItem'
import Preloader from '../header/Preloader'
import { Fade } from 'react-animation-components';

const Records = ({ records, loading, filterByWhat, isFilter, onSelect, clearFilter }) => {

    const [isActive, setIsActive] = useState('jsGridView')

    if(loading) {
        return <Preloader />
    } 
        return (
            <Fade in>
                <div className='app-content'>
                    <div className="app-sidebar">
                        <div className="app-sidebar-link"></div>
                        <div className="app-sidebar-link"></div>
                        <div className="app-sidebar-link"></div>
                        <div className="app-sidebar-link"></div>
                    </div>

                    <div className="projects-section">
                        <div className="projects-section-header">
                            <p>Patient Records</p>
                            <p className="status-number"> {records.length} Records </p>
                        </div>
                        <div className="projects-section-line">
                            <div className="projects-status">
                                <select className="select-css" onChange={(e) => onSelect(e.target.value)}>
                                <option disabled value=''>Filter Info type...</option>
                                <option value="FirstName" className="left">FirstName</option>
                                <option value="LastName"  className="left">LastName</option>
                                <option value="Gender" className="left">Gender</option>
                                <option value="Latitude"  className="left">Latitude</option>
                                <option value="Longitude" className="left">Longitude</option>
                                <option value="CreditCardNumber" className="left">CreditCardNumber</option>
                                <option value="CreditCardType" className="left">CreditCardType</option>
                                <option value="Email" className="left">Email</option>
                                <option value="DomainName" className="left">DomainName</option>
                                <option value="PhoneNumber" className="left">PhoneNumber</option>
                                <option value="MacAddress" className="left">MacAddress</option>
                                <option value="URL" className="left">URL</option>
                                <option value="UserName" className="left">UserName</option>
                                <option value="LastLogin" className="left">LastLogin</option>
                                <option value="PaymentMethod" className="left">PaymentMethod</option>
                                </select>
                            </div>
 

                            <div className="view-actions">
                                <button onClick={() => clearFilter()} className="waves-effect waves-light blue hoverable btn-small">
                                    <i className="material-icons right">clear</i>Clear Filter
                                </button>
                                <button className={`view-btn list-view ${isActive === 'jsListView' ? 'active' : ''}`} title="List View" onClick={() => setIsActive('jsListView')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="feather feather-list">
                                        <line x1="8" y1="6" x2="21" y2="6" />
                                        <line x1="8" y1="12" x2="21" y2="12" />
                                        <line x1="8" y1="18" x2="21" y2="18" />
                                        <line x1="3" y1="6" x2="3.01" y2="6" />
                                        <line x1="3" y1="12" x2="3.01" y2="12" />
                                        <line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                                </button>
                                <button className={`view-btn grid-view ${isActive === 'jsGridView' ? 'active' : ''}`} title="Grid View" onClick={() => setIsActive('jsGridView')}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="feather feather-grid">
                                        <rect x="3" y="3" width="7" height="7" />
                                        <rect x="14" y="3" width="7" height="7" />
                                        <rect x="14" y="14" width="7" height="7" />
                                        <rect x="3" y="14" width="7" height="7" /></svg>
                                </button>
                            </div>
                        </div>

                        <div className={`project-boxes ${isActive}`}>
                            {!loading && records.length === 0 ? (<h4 style={{ margin: '20px' }} className='center'>No records, sorry</h4>) : records.map((record, key) => (
                            <RecordItem key={key} record={record} isFilter={isFilter} filterByWhat={filterByWhat} />
                            ))}
                        </div>
                    </div>
                </div>
                
            </Fade>
        
        ) 
   
}

export default Records
