import React from 'react'
import './Res.css'
import { Link } from 'react-router-dom'

export default function Res() {
  return (
    <div>
        <h3 className='Resp2'>Thank you!</h3>
        <span className='Resp3'>We have received your response. We will get back yo you shortly.</span>
        <h4 className='Resp1'>Meanwhile you can <Link to= "/home">  browse us </Link> to know more</h4>
        </div>
  )
}
