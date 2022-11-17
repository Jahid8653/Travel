import React from 'react'
import { useParams } from 'react-router-dom'
import PackagesJSON from '../Packages.json'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Details.css'
import {Container} from 'react-bootstrap';




export default function Details() {
  let { name, pl } = useParams();
  console.log("Package Name: ", name, "Place: ", pl);
  let sub_package = PackagesJSON.packages.find((data) => data.pack_name === name)
  let single_pack = sub_package.sub_pack.find((data) => data.t_place === pl)
  console.log("Required Package: ", single_pack);
  return (
    <>
    <Container className='havvy'>
     <div className='bkng'>
      <h4 className='dtls'>Destination Name: {single_pack.t_place}</h4>
      <h4 className='dtls'>Total Cost: {single_pack.price}</h4>
      <h4 className='dtls'>Tour Duration: {single_pack.days}</h4>
      <h4 className='dtls'>Tour Desc: {single_pack.sub_desc}</h4>
      <Link to={`/booking-page`}>
        <Button className='ibtn9' variant="primary">Booking Open</Button>
      </Link>
      <img className='iimg' alt = "travel" src = {single_pack.p_image}/>
      </div>
      
      </Container>
    </>
  )
}
