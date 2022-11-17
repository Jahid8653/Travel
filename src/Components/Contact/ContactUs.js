import React from 'react'
import './ContactUs.css'
import { Button } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function ContactUs() {
  // const navigate = useNavigate();
  // navigate('/response-page')
  return (
    <div className='cform'>
        <h3 className='h4'>We will be happy to help you</h3>
        <h5>Feel free to contact us anytime through the form. We will respond to your inquiry as quickly as possible.</h5>
      <form className='form3'>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" placeholder = "Enter your name" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" placeholder = "Enter your email" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" placeholder = "Type something here..." id="message" required />
        </div>
        <Link to={`/response-page`}>
              <Button className='ibtn07'>Submit</Button>
            
              </Link>
      </form>
    </div>
  )
}
