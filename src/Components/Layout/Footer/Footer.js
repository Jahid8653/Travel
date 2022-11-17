import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    
    
    <div className="Footer">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/topdestination">Top Destination</Nav.Link> <br/>
      <h6> © Copyright 2022 by Jahmo - All Rights Reserved </h6>
    </div>
    
  )
}
