import React from 'react'
import './PNF.css'
import { Link } from 'react-router-dom'

export default function PNF() {
  return (
    <>
    <div className='styleme2'>
    <h1>Sorry!!! Page not found!</h1>
    <img
            className='pnf'
            src="../../Image/Error.png"
            alt="First slide"
          /> <br/> <br/>
           <h4>Click here to go to <Link to= "/home">  home page </Link></h4>
    </div>
    </>
  )
}
