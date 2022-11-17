import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal.css'
import { Link } from 'react-router-dom';

export default function ModalAuth() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
        <Button variant="primary" onClick={handleShow}>
    Booking Open
  </Button>

  <Modal show={show} onHide={handleClose} >
    <Modal.Header closeButton className='lmodal'>
      <Modal.Title>Login to continue</Modal.Title>
    </Modal.Header>
   
    <Modal.Footer className='lmodal2'>
    <Link to={`/login`}>
      <Button  variant="primary" onClick={handleClose}>
        Login
      </Button>
      </Link>
      <Button variant="danger" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
    <p className='lmodal3'><b>Not a member? <Link to={`/registration`}>Register here</Link></b></p>
  </Modal>
  </>
  )
}
