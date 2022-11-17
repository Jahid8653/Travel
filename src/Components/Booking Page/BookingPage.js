// import React from 'react'
import './BookingPage.css'
import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function BookingPage() {
  const [inputState, setInputState]= useState({errorMsg:{name:"", phone:"", email:"", city:"", pin:"", address:"" ,passenger:"", date:""}})
    const validName=RegExp('^[A-Z]{1}[A-Za-z]{1,29}$')
    const validEmail=RegExp('^([a-z0-9._])+@([a-z]+.)+[a-z]{2,4}$')
    const validCity=RegExp('^([a-zA-Z -]{1,50})$');
    const validPin=RegExp('^[0-9]{5}$');
    const validPhone=RegExp('^[6-9]{1}[0-9]{9}$');
    const validAddress=RegExp('^([a-zA-Z0-9])(s,'-')$');
    const validPassenger=RegExp('^[0-9]{5}$');
    const validDate=RegExp('^[0-9]{5}$');

    const handleChange=(event)=> {
        event.persist();
        const{name,value}= event.target
        const error={...inputState.errorMsg}
        switch(name)
        {
          case 'name':error.name=validName.test(value)? "":
            "*Contains only character, should start with capital letter, Must be more than 3 character"
        
          break;
          case 'phone':error.phone=validPhone.test(value)? "":
            "*Contains only numbers, Min 10 numbers and must include country code"
         
          break;
          case 'email':error.email=validEmail.test(value)? "":
            "*Contains only character,number,special character, Must be more than 10 characters"
        
          break;
          case 'city':error.city=validCity.test(value)? "":
            "*Contains min 3 and max 25 characters, should start with capital letter"
          
          break;
          case 'pin':error.pin=validPin.test(value)? "":
            "*Contains min 5 and max 15 numbers"
            
          break;
          case 'address':error.address=validAddress.test(value)? "":
            "*Contains min 20 and max 45 characters"
           
          break;
          case 'passenger':error.passenger=validPassenger.test(value)? "":
            "*Contains only numbers"
            
          break;
          case 'date':error.date=validDate.test(value)? "":
            "*Contains only numbers"
            
          break;
          default:break;
        }
        
        setInputState({...inputState, [name]:value, errorMsg:error})
        console.log("Error: ", inputState.errorMsg);
    }
const handle_submit=(event) => {
event.preventDefault();
console.log("Submitted value ", inputState);
let user={
  name:inputState.name,
  phone:inputState.contact,
  email:inputState.email,
  city:inputState.city,
  pin:inputState.pin,
  address:inputState.address,
  passenger:inputState.passenger,
  date:inputState.date,
  
}
axios.post('https://prod-crud.herokuapp.com/register', user)
.then((res)=>{
  alert("Data Submitted Successfully")
  console.log("Axios res: ", res);
})
.catch((err) =>{
  console.log("Axios err:", err);
})
}
  const [date, setDate] = useState(new Date());
  const handleChangeBtn = date => setDate(date);

  return (
   
    <div className='iform'>
       <h2 className='bkng' >Booking Page</h2>
      <form className='form2' onSubmit={handle_submit}>
      
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            <b>Name</b>
          </label>
          <input className="form-control" name= "name" placeholder='Enter your name' type="text" id="name" required onChange={handleChange}/>
          {inputState.errorMsg.name.length>0?<span className='iText'>{inputState.errorMsg.name}</span>: ""}
        </div>  
        
        <div className="mb-3">
          <label className="form-label" htmlFor="phone">
            <b>Phone</b>
          </label>
          <input className="form-control" name= "phone" placeholder='Enter your contact number' type="phone" id="phone" required onChange={handleChange} />
          {inputState.errorMsg.phone.length>0?<span className='iText'>{inputState.errorMsg.phone}</span>: ""}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            <b>Email</b>
          </label>
          <input className="form-control" name= "email" placeholder='Enter your email' type="email" id="email" required onChange={handleChange} />
          {inputState.errorMsg.email.length>0?<span className='iText'>{inputState.errorMsg.email}</span>: ""}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="city">
            <b>City</b>
          </label>
          <input className="form-control" name= "city" placeholder='Enter your city' type="city" id="city" required onChange={handleChange} />
          {inputState.errorMsg.city.length>0?<span className='iText'>{inputState.errorMsg.city}</span>: ""}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="pin">
            <b>Pin</b>
          </label>
          <input className="form-control" name= "pin" placeholder='Enter pincode' type="pin" id="pin" required onChange={handleChange} />
          {inputState.errorMsg.pin.length>0?<span className='iText'>{inputState.errorMsg.pin}</span>: ""}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="address">
            <b>Address</b>
          </label>
          <input className="form-control" name= "address" placeholder='Enter your address' type="address" id="address" required onChange={handleChange} />
          {inputState.errorMsg.address.length>0?<span className='iText'>{inputState.errorMsg.address}</span>: ""}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="numberofpassenger">
            <b>Number of passenger</b>
          </label>
          <input className="form-control" name= "number" placeholder='Enter number of passenger' type="number" id="ambiguous_id" required onChange={handleChange} />
          {inputState.errorMsg.number>0?<span className='iText'>{inputState.errorMsg.number}</span>: ""}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="dateoftravel">
            <b>Date of travel</b> 
          </label>
          <DatePicker className="form-control" selected={date} id="date" dateFormat="MMMM d, yyyy" required onChange={handleChangeBtn} />
          {inputState.errorMsg.date>0?<span className='iText'>{inputState.errorMsg.date}</span>: ""}
        </div>
        <Link to={`/checkout-page`}>
        <Button className='ibtn10' variant="primary">Next</Button>
      </Link>
      </form>
 
    </div>
    
  )
}

