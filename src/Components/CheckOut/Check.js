import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Check.css'

export default function Check() {
    return (
        <>
        
            <h2> Payment Page </h2>

            <div className="container mt-5 d-flex justify-content-center">
                <div className="icard p-4">
                    <h4>Total amount:</h4>
                    <div className="pt-4"> <label > <span>NAME ON CARD</span></label>
                        <input type="text" name="name" className="form-control" placeholder="Name on card" /> </div>
                    <div className="pt-4" > <label > <span >CARD NUMBER</span></label>
                        <input type="tel" name="credit-number" className="form-control" placeholder="Card number" /> </div>
                    <div className="d-flex justify-content-between pt-4 ">
                        <div> <label><span >EXPIRY</span> </label> 
                            <input type="date" name="expiry-date" className="form-control" placeholder="MM / YY" /> </div> 
                        <div> <label><span className="cvv">CVV</span></label> 
                            <input type="tel" name="cvv-number" className="cvv form-control" placeholder="cvv"/> </div>
                    </div>
                    <div className="d-flex justify-content-between pt-5 align-items-center">
                        <button type="button" className="btn cancel-btn">Cancel</button>
                        <button type="button" className="btn payment-btn">Make Payment</button> </div>
                </div>
            </div>
            <Link to={`/booking-page`}>
                <Button className='ibtn7' variant="primary">Back</Button>
            </Link>
        </>

    )

}
