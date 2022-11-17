import React from 'react'
import PackagesJSON from '../Packages.json'
import './Category.css'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';


export default function Category() {
  console.log(PackagesJSON);
  return (
    <div className='lop'>
      <h1> Different Tour Packages </h1>

      <Row xs={1} md={3} className="g-4">
        {PackagesJSON.packages.map((data) => (
          <Col>
            <Card className='ict0' style={{ width: '20rem' }}>
              <Card.Body>
                <Card.Title className='ct'>{data.pack_name}</Card.Title>
                <Link to={`/sub_pack/${data.pack_name}`}>
                  <Button className='iview'> View More </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </div>

  )

}