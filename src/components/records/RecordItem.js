import React, { Fragment, useState } from 'react'

const RecordItem = ({ record, isFilter, filterByWhat }) => {

        const { FirstName, LastName, Gender, Latitude, Longitude, CreditCardNumber, CreditCardType, Email, DomainName, PhoneNumber, MacAddress, URL, UserName, LastLogin, PaymentMethod } = record

        const [show, setShow] = useState(false)

        const handleHide = () => {
            if(show === false){
                setShow(true)
            } else{
                setShow(false)
            }   
        }
        const iconStyle = {
            marginRight: '16px'
        }

        if(isFilter) {
            return (
                
                <div className='project-box-wrapper hoverable'>
                    <div className="project-box" style={{backgroundColor: "#F3F6FD"}}>
                    <ul>
                        <li className='collection-item'>
                            <span className='grey-text'>
                            <a href="#!">Name: {FirstName} {''} {LastName} </a><br/>
                            <br />
                                {record[filterByWhat]}
                            </span>
                        </li>
                    </ul>
                    </div>
                </div>
            )
        
        } else {
            return (
                <Fragment>
                    <div className="project-box-wrapper hoverable">
                        <div className="project-box" style={{backgroundColor: "#F3F6FD"}}>
                            <div className="project-box-header">
                                <span>Details</span>
                            </div>
                            <ul style={{ margin: '10px', marginBottom: '5px' }}>
                            
                                <li><i className="fal fa-id-badge" style={iconStyle}></i> Name: {FirstName} {''} {LastName}</li>
                                <li><i className="fal fa-mars-stroke-v" style={iconStyle}></i> {Gender}</li>
                                <li><i className="fal fa-compass" style={iconStyle}></i> {Latitude}</li>
                                <li><i className="fal fa-compass" style={iconStyle}></i> {Longitude}</li>
                                <li><i className="fal fa-credit-card" style={iconStyle}></i> {CreditCardNumber}</li>
                                <li><i className="fab fa-cc-jcb" style={iconStyle}></i> {CreditCardType}</li>
                                
                                {show ? <div>
                                    <li><i className="fas fa-at" style={iconStyle}></i> {''} {Email}</li> 
                                    <li><i className="fal fa-server" style={iconStyle}></i>{DomainName}</li>
                                    <li><i className="fal fa-mobile-alt" style={iconStyle}></i>{PhoneNumber}</li>
                                    <li><i className="fal fa-location-arrow" style={iconStyle}></i>{MacAddress}</li>
                                    <li><i className="fal fa-link" style={iconStyle}></i>{URL}</li>
                                    <li><i className="far fa-user" style={iconStyle}></i>{UserName}</li>
                                    <li><i className="fal fa-sign-in-alt" style={iconStyle}></i>{LastLogin}</li>
                                    <li> {PaymentMethod === 'paypal' ? <i className="fab fa-cc-paypal" style={iconStyle}></i>: PaymentMethod === 'money order' ? <i className="fal fa-money-check-alt" style={iconStyle}></i> : PaymentMethod === 'cc' ? <i className="fas fa-money-check-alt" style={iconStyle}></i> : <i className="fab fa-cc-stripe" style={iconStyle}></i>} 
                                        {PaymentMethod}</li>
                                </div>  : null}
                                
                            </ul>
                            
                                
                                <div className="days-left" style={{color: "#ff942e", cursor: 'pointer'}} onClick={handleHide}>
                                   See more
                                </div>
                        </div>
                        <p className="item" style={{display: "none"}}>{JSON.stringify(record)}</p>
                    </div>

                </Fragment>
               
            )
        }
            
        
              
}

export default RecordItem