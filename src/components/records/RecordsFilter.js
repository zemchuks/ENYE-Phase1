import React from 'react'

const RecordsFilter = ({ records,  onSelect, clearFilter }) =>  {
    
        return (
            <div className='row'>
                <div className="input-field col l10 s8 m8">
                    <select className="icons" defaultValue={records} onChange={(e) => onSelect(e.target.value)}>
                    <option disabled value=''>Filter Info type...</option>
                    <option value="FirstName"  data-icon="/images/names.png" className="left">FirstName</option>
                    <option value="LastName"  data-icon="images/names.png" className="left">LastName</option>
                    <option value="Gender"  data-icon="images/gender.png" className="left">Gender</option>
                    <option value="Latitude"  data-icon="images/longitude-latitude.png" className="left">Latitude</option>
                    <option value="Longitude"  data-icon="images/longitude-latitude.png" className="left">Longitude</option>
                    <option value="CreditCardNumber"  data-icon="images/creditcardnum.png" className="left">CreditCardNumber</option>
                    <option value="CreditCardType"  data-icon="images/cardType.png" className="left">CreditCardType</option>
                    <option value="Email"  data-icon="images/email.png" className="left">Email</option>
                    <option value="DomainName"  data-icon="images/domainName.png" className="left">DomainName</option>
                    <option value="PhoneNumber"  data-icon="images/phonenumber.png" className="left">PhoneNumber</option>
                    <option value="MacAddress"  data-icon="images/macAddress.png" className="left">MacAddress</option>
                    <option value="URL"  data-icon="images/URL.png" className="left">URL</option>
                    <option value="UserName"  data-icon="images/username.png" className="left">UserName</option>
                    <option value="LastLogin"  data-icon="images/lastLogin.png" className="left">LastLogin</option>
                    <option value="PaymentMethod"  data-icon="images/payment.png" className="left">PaymentMethod</option>
                    
                    </select>
                </div>
                <div className="col l2 m4 s4" style={{ marginTop: '25px'}}>
                <button onClick={() => clearFilter()} className="waves-effect waves-light btn blue hoverable"><i className="material-icons right">clear</i>Clear Filter</button>
                </div>
            </div>
        )
   
}

export default RecordsFilter