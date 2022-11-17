import React from 'react'
import './Packages.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Packages() {
  return (
    <>
      <div className='styleme7'>
        <h1>Family Packages In India </h1>
        <p>Jahmo features the list of top family holiday packages in India. Be it any part of the <br />
          country or any season of the year our packages give you the best options of embarking on <br />
          an enjoyable family vacation to these destinations. You are welcome to explore the details <br />
          of these holiday packages here.</p>
      </div>
      <h2>Best Selling India Tour Packages</h2>
      <Row xs={1} md={2} className="g-4">
        <Col className='top'>
          <Card>
            <Card.Img variant="top" src="../../Image/Sikkim.jpg" />
            <Card.Body>
              <Card.Title>Sikkim Tour Packages</Card.Title>
              <h6 className='pot'>3D & 2N</h6>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  )
}
