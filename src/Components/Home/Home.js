import React from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModalAuth from '../Modal/Modal';



export default function Home() {
      const isLogin = window.sessionStorage.getItem('TokenValue')
      console.log("Login Value: ", isLogin);
  return (
    <>

      <Carousel className='slider'>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="../../Image/Sikkim.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='ititle'>Sikkim Tour</h3>
            <p className='text'>We offer best deal in tourism market. Sikkim is one of the top place to visit in eastern India.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="../../Image/Manali.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='ititle'>Manali Tour</h3>
            <p className='text'>Manali is a place of many visitors to visit once in lifetime.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="../../Image/Goa.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='ititle'>Goa Tour</h3>
            <p className='text'>Goa is a international level sea beach where many foreigners use to visit once in lifetime.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> <br /> <br /> <br />


      <h4>We have the best destination package in the market. We have domestic and international tour package
        with budget friendly. Our dedicated team will help you to reach your dream destination with the help
        of every possible way. </h4>


      <br />
      <div className='adn'> <br />
        <h2> Trending Indian Destinations...</h2>
        {/* <Container> */}
        <Row xs={1} md={4} className="m-0">
          <Col className='mt-4'>
            <Card className='mol'>
              <Card.Img variant="top" src="../../Image/Sikkim.jpg" />
              <Card.Body>
                <Card.Title className='ict' >Sikkim</Card.Title>
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
                <Card.Title className='ict'>Manali</Card.Title>
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
                <Card.Title className='ict'>Goa Beach</Card.Title>
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
                <Card.Title className='ict'>Jammu and Kashmir</Card.Title>
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
        </Row> <br />
        <h2> Trending International Destinations...</h2>
        <Row xs={1} md={4} className="m-0">
          <Col className='mt-4'>
            <Card className='mol'>
              <Card.Img variant="top" src="../../Image/Dubai.jpg" />
              <Card.Body>
                <Card.Title className='ict'>Dubai</Card.Title>
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
              <Card.Img variant="top" src="../../Image/Greece.jpg" />
              <Card.Body>
                <Card.Title className='ict'>Greece</Card.Title>
                <h5 className='pot2'>Starting from Rs.59999/- </h5>
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
              <Card.Img variant="top" src="../../Image/Krabi.jpg" />
              <Card.Body>
                <Card.Title className='ict'>Krabi</Card.Title>
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
              <Card.Img variant="top" src="../../Image/Lucerne.jpg" />
              <Card.Body>
                <Card.Title className='ict'>Lucerne</Card.Title>
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

        </Row>
        {/* </Container> */}
      </div> <br /> <br /> <br /> <br />

      <h3 className='ih3'>Get in touch</h3>
      <form className='form'>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" placeholder="Enter your name" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" placeholder="Enter your email" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" placeholder="Type something here..." type="text" id="message" required />
        </div>
        <Link to={`/response-page`}>
          <Button className='ibtn02' variant="primary">Submit</Button>
        </Link>
      </form>
    </>

  )
}
