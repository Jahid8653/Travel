import React from 'react'
import './Top Destination.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import ModalAuth from '../Modal/Modal';


export default function TopDestination() {
  const isLogin = window.sessionStorage.getItem('TokenValue')
      console.log("Login Value: ", isLogin);
  return (
    <>
      <div className='Kol'> <br />
        <h4>International Holiday Packages</h4>
        <p>Whether it's your first international trip or you have travelled abroad multiple times, planning a <br />
          holiday to a distant land is always a special feeling. Our international holiday packages are <br />
          well-made and hold a high reputation among customers who have been travelling with us. <br />
          Here, take a look at our top international holiday packages.</p> 

          <Row xs={1} md={4} className="m-0">
      <Col className='mt-4'>
          <Card>
            <Card.Img variant="top" src="../../Image/Dubai.jpg" />
            <Card.Body>
              <Card.Title className='ict2'>Dubai</Card.Title>
                <h5 className='pot2'>Starting from Rs.49999/- </h5>
                <h6 className='pot'>4D & 3N</h6>
                {
                  isLogin?<Link to={`/booking-page`}>
                  <Button variant="primary">Booking Open</Button>
                </Link>:
                <ModalAuth/>
                }
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-4'>
          <Card className='mol'>
            <Card.Img variant="top" src="../../Image/Malaysia.jpg" />
            <Card.Body>
              <Card.Title className='ict2'>Malaysia</Card.Title>
                <h5 className='pot2'>Starting from Rs.59999/- </h5>
                <h6 className='pot'>5D & 4N</h6>
                {
                  isLogin?<Link to={`/booking-page`}>
                  <Button variant="primary">Booking Open</Button>
                </Link>:
                <ModalAuth/>
                }
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-4'>
          <Card className='mol'>
            <Card.Img variant="top" src="../../Image/Maldive.jpg" />
            <Card.Body>
              <Card.Title className='ict2'>Maldive</Card.Title>
                <h5 className='pot2'>Starting from Rs.54999/- </h5>
                <h6 className='pot'>4D & 3N</h6>
                {
                  isLogin?<Link to={`/booking-page`}>
                  <Button variant="primary">Booking Open</Button>
                </Link>:
                <ModalAuth/>
                }
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-4'>
          <Card className='mol'>
            <Card.Img variant="top" src="../../Image/Singapore.jpg" />
            <Card.Body>
              <Card.Title className='ict2'>Singapore</Card.Title>
                <h5 className='pot2'>Starting from Rs.89999/- </h5>
                <h6 className='pot'>4D & 3N</h6>
                {
                  isLogin?<Link to={`/booking-page`}>
                  <Button variant="primary">Booking Open</Button>
                </Link>:
                <ModalAuth/>
                }
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-4'>
          <Card className='mol'>
            <Card.Img variant="top" src="../../Image/Bali.jpg" />
            <Card.Body>
              <Card.Title className='ict2'>Bali</Card.Title>
                <h5 className='pot2'>Starting from Rs.39999/- </h5>
                <h6 className='pot'>4D & 3N</h6>
                {
                  isLogin?<Link to={`/booking-page`}>
                  <Button variant="primary">Booking Open</Button>
                </Link>:
                <ModalAuth/>
                }
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-4'>
          <Card className='mol'>
            <Card.Img variant="top" src="../../Image/Bangkok.jpg" />
            <Card.Body>
              <Card.Title className='ict2'>Bangkok</Card.Title>
                <h5 className='pot2'>Starting from Rs.79999/- </h5>
                <h6 className='pot'>4D & 3N</h6>
                {
                  isLogin?<Link to={`/booking-page`}>
                  <Button variant="primary">Booking Open</Button>
                </Link>:
                <ModalAuth/>
                }
            </Card.Body>
          </Card>
        </Col>
        </Row>  <br /> <br /> <hr/>

        <h4>India & Around Holiday Packages</h4>
        <p>Travelling abroad for a holiday is a great thing but there isn't anything that beats the diversity <br />
          of landscapes and cultures in India. We inspire local travellers to travel more in India, as our <br />
          India holiday packages acquaint travellers with the incredible beauty of the country. Take a look <br />
          at top selling holiday packages in India.</p> 

          <Row xs={1} md={4} className="m-0">
        <Col className='mt-4'>
          <Card className='mol'>
            <Card.Img variant="top" src="../../Image/Sikkim.jpg" />
            <Card.Body>
              <Card.Title className='ict2'>Sikkim</Card.Title>
                <h5 className='pot2'>Starting from Rs.6999/- </h5>
                <h6 className='pot'>3D & 2N</h6>
                {
                  isLogin?<Link to={`/booking-page`}>
                  <Button variant="primary">Booking Open</Button>
                </Link>:
                <ModalAuth/>
                }
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-4'>
          <Card className='mol'>
            <Card.Img variant="top" src="../../Image/Manali.jpg" />
            <Card.Body>
              <Card.Title className='ict2'>Manali</Card.Title>
                <h5 className='pot2'>Starting from Rs.9999/- </h5>
                <h6 className='pot'>4D & 3N</h6>
                {
                  isLogin?<Link to={`/booking-page`}>
                  <Button variant="primary">Booking Open</Button>
                </Link>:
                <ModalAuth/>
                }
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-4'>
          <Card className='mol'>
            <Card.Img variant="top" alt="Goa" src="../../Image/Goa.jpg" />
            <Card.Body>
              <Card.Title className='ict2'>Goa Beach</Card.Title>
                <h5 className='pot2'>Starting from Rs.8999/-</h5>
                <h6 className='pot'>3D & 2N</h6>
                {
                  isLogin?<Link to={`/booking-page`}>
                  <Button variant="primary">Booking Open</Button>
                </Link>:
                <ModalAuth/>
                }
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-4'>
          <Card className='mol'>
            <Card.Img variant="top" src="../../Image/J&K.jpg" />
            <Card.Body>
              <Card.Title className='ict2'>Jammu and Kashmir</Card.Title>
                <h5 className='pot2'>Starting from Rs.14999/- </h5>
                <h6 className='pot'>5D & 4N</h6>
                {
                  isLogin?<Link to={`/booking-page`}>
                  <Button variant="primary">Booking Open</Button>
                </Link>:
                <ModalAuth/>
                }
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-4'>
          <Card className='mol'>
            <Card.Img variant="top" src="../../Image/Kerala.jpg" />
            <Card.Body>
              <Card.Title className='ict2'>Kerala</Card.Title>
                <h5 className='pot2'>Starting from Rs.13999/- </h5>
                <h6 className='pot'>5D & 4N</h6>
                {
                  isLogin?<Link to={`/booking-page`}>
                  <Button variant="primary">Booking Open</Button>
                </Link>:
                <ModalAuth/>
                }
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-4'>
          <Card className='mol'>
            <Card.Img variant="top" src="../../Image/Ooty.jpg" />
            <Card.Body>
              <Card.Title className='ict2'>Ooty</Card.Title>
                <h5 className='pot2'>Starting from Rs.17999/- </h5>
                <h6 className='pot'>6D & 5N</h6>
                {
                  isLogin?<Link to={`/booking-page`}>
                  <Button variant="primary">Booking Open</Button>
                </Link>:
                <ModalAuth/>
                }
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-4'>
          <Card className='mol'>
            <Card.Img variant="top" src="../../Image/Shimla.jpg" />
            <Card.Body>
              <Card.Title className='ict2'>Shimla</Card.Title>
                <h5 className='pot2'>Starting from Rs.17999/- </h5>
                <h6 className='pot'>6D & 5N</h6>
                {
                  isLogin?<Link to={`/booking-page`}>
                  <Button variant="primary">Booking Open</Button>
                </Link>:
                <ModalAuth/>
                }
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-4'>
          <Card className='mol'>
            <Card.Img variant="top" src="../../Image/Sundarban.jpg" />
            <Card.Body>
              <Card.Title className='ict2'>Sundarban</Card.Title>
                <h5 className='pot2'>Starting from Rs.7999/- </h5>
                <h6 className='pot'>3D & 2N</h6>
                {
                  isLogin?<Link to={`/booking-page`}>
                  <Button variant="primary">Booking Open</Button>
                </Link>:
                <ModalAuth/>
                }
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-4'>
          <Card className='mol'>
            <Card.Img variant="top" src="../../Image/Taj Mahal.jpg" />
            <Card.Body>
              <Card.Title className='ict2'>Taj Mahal</Card.Title>
                <h5 className='pot2'>Starting from Rs.13999/- </h5>
                <h6 className='pot'>2D & 1N</h6>
                {
                  isLogin?<Link to={`/booking-page`}>
                  <Button variant="primary">Booking Open</Button>
                </Link>:
                <ModalAuth/>
                }
            </Card.Body>
          </Card>
        </Col>
      </Row> <br /> <br /> <hr/>

          <h4>Honeymoon Holiday Packages</h4>
        <p>Whether you are planning your honeymoon in scenic Kashmir or picturesque Switzerland, Thomas Cook <br />
           India's honeymoon packages are tailor-made for couples who are looking to escape into natural beauty <br />
           to let off steam.</p>

           <Row xs={1} md={4} className="m-0">
        <Col className='mt-4'>
          <Card className='mol'>
            <Card.Img variant="top" src="../../Image/Andaman.jpg" />
            <Card.Body>
              <Card.Title className='ict2'>Andaman</Card.Title>
                <h5 className='pot2'>Starting from Rs.16999/- </h5>
                <h6 className='pot'>4D & 3N</h6>
                {
                  isLogin?<Link to={`/booking-page`}>
                  <Button variant="primary">Booking Open</Button>
                </Link>:
                <ModalAuth/>
                }
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-4'>
          <Card className='mol'>
            <Card.Img variant="top" src="../../Image/Goa.jpg" />
            <Card.Body>
              <Card.Title className='ict2'>Goa</Card.Title>
                <h5 className='pot2'>Starting from Rs.16999/- </h5>
                <h6 className='pot'>4D & 3N</h6>
                {
                  isLogin?<Link to={`/booking-page`}>
                  <Button variant="primary">Booking Open</Button>
                </Link>:
                <ModalAuth/>
                }
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-4'>
          <Card className='mol'>
            <Card.Img variant="top" src="../../Image/Dubai.jpg" />
            <Card.Body>
              <Card.Title className='ict2'>Dubai</Card.Title>
                <h5 className='pot2'>Starting from Rs.56999/- </h5>
                <h6 className='pot'>4D & 3N</h6>
                {
                  isLogin?<Link to={`/booking-page`}>
                  <Button variant="primary">Booking Open</Button>
                </Link>:
                <ModalAuth/>
                }
            </Card.Body>
          </Card>
        </Col>
        <Col className='mt-4'>
          <Card className='mol'>
            <Card.Img variant="top" src="../../Image/Maldive.jpg" />
            <Card.Body>
              <Card.Title className='ict2'>Maldive</Card.Title>
                <h5 className='pot2'>Starting from Rs.26999/- </h5>
                <h6 className='pot'>4D & 3N</h6>
                {
                  isLogin?<Link to={`/booking-page`}>
                  <Button variant="primary">Booking Open</Button>
                </Link>:
                <ModalAuth/>
                }
            </Card.Body>
          </Card>
        </Col>
        </Row>
      </div>
    </>
  )
}
