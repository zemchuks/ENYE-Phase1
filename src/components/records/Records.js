import React, { useState } from 'react'
import RecordItem from './RecordItem'
import Preloader from '../header/Preloader'
import { Fade } from 'react-animation-components';

const Records = ({ records, loading, filterByWhat, isFilter, onSelect, clearFilter }) => {

    const [isActive, setIsActive] = useState(false)

    const listToggle = () => {
        setIsActive(!isActive)
    }
   

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
                                <button key={isActive} className="view-btn list-view" title="List View" onClick={listToggle}>
                                <i className="fal fa-list-ul fa-2x"></i>
                                </button>
                                <button className="view-btn grid-view active" title="Grid View">
                                <i className="fal fa-th-large fa-2x"></i>
                                </button>
                            </div>
                        </div>

                        <div className="project-boxes jsGridView">
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
