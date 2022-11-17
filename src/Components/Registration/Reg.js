import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Reg.css'
import Axios from 'axios';

export default function Reg() {
    const [inputState, setInputState]= useState({errorMsg:{fname:"", lname:"", email:"", password:"", contact:""}})
    const validName=RegExp('^[A-Z]{1}[A-Za-z]{1,29}$')
    const validEmail=RegExp('^([a-z0-9._])+@([a-z]+.)+[a-z]{2,4}$')
    const validPassword=RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&]).{8,15}$')
    const validContact=RegExp('^[6-9]{1}[0-9]{9}$')
    const handleChange=(event)=> {
        event.persist();
        const{name,value}= event.target
        const error={...inputState.errorMsg}
        switch(name)
        {
          case 'fname':error.fname=validName.test(value)? "":
            "*Contains only character, should start with capital letter, Must be more than 2 character"
          //error.fname=value.length<3?"Must be more than 3 characters": ""
          break;
          case 'lname':error.lname=validName.test(value)? "":
            "*Contains only character, should start with capital letter, Must be more than 2 character"
            // error.lname=value.length<3?"Must be more than 3 characters": ""
          break;
          case 'email':error.email=validEmail.test(value)? "":
            "*Contains only character,number,special character, Must be more than 10 characters"
            // error.email=value.length<10?"Must be more than 10 characters": ""
          break;
          case 'password':error.password=validPassword.test(value)? "":
            "*Contains min 8 and max 15 characters,one uppercase and lowercase letter,one number,one special characters"
            // error.password=value.length<5?"Must be more than 5 characters": ""
          break;
          case 'contact':error.contact=validContact.test(value)? "":
            "*Contains only numbers, Min 10 numbers and max 15 numbers, must include country code"
            // error.contact=value.length<10?"10 characters required": ""
          break;
          default:break;
        }
        // console.log("Event: ", event);
        setInputState({...inputState, [name]:value, errorMsg:error})
        console.log("Error: ", inputState.errorMsg);
    }
const handle_submit=(event) => {
event.preventDefault();
console.log("Submitted value ", inputState);
let user={
  first_name:inputState.fname,
  last_name:inputState.lname,
  email:inputState.email,
  password:inputState.password,
  phone:inputState.contact,
}
Axios.post('https://prod-crud.herokuapp.com/register', user)
.then((res)=>{
  alert("Data Submitted Successfully")
  console.log("Axios res: ", res);
})
.catch((err) =>{
  console.log("Axios err:", err);
})
}

  return (
    <div className='jah'>
    <Container>
    <Form className='reg' onSubmit={handle_submit}>
      <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name='fname' placeholder="Enter First Name" required
           className='regInput' onChange={handleChange}/>
             {inputState.errorMsg.fname.length>0?<span className='Text'>{inputState.errorMsg.fname}</span>: ""}
      </Form.Group>
    

      <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name= 'lname' placeholder="Enter Last Name" required
        className='regInput' onChange={handleChange}/>
          {inputState.errorMsg.lname.length>0?<span className='Text'>{inputState.errorMsg.lname}</span>: ""}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name='email' placeholder="Email" required
        className='regInput' onChange={handleChange}/>
          {inputState.errorMsg.email.length>0?<span className='Text'>{inputState.errorMsg.email}</span>: ""}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required
        className='regInput' onChange={handleChange}/>
          {inputState.errorMsg.password.length>0?<span className='Text'>{inputState.errorMsg.password}</span>: ""}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Contact</Form.Label>
        <Form.Control type="contact" name='contact' placeholder="Contact" required
        className='regInput' onChange={handleChange}/>
          {inputState.errorMsg.contact.length>0?<span className='Text'>{inputState.errorMsg.contact}</span>: ""}
      </Form.Group>
      <Button className='ireg' variant="primary" type="submit">
        Register
      </Button>
    </Form>
    </Container>
    </div>
  )
}
