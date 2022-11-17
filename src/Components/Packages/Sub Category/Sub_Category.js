import React from 'react'
import PackagesJSON from '../Packages.json'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sub_Category.css'

export default function SubCategory() {
  let {name} = useParams();

  let sub_pack = PackagesJSON.packages.find((data) => data.pack_name === name)
  // console.log("Sub Packages: ", sub_pack);
  return (
    <>
    <h3 className='ih32'> Welcome to {sub_pack.pack_name} tour packages</h3>
   <hr/>
<Container>
<Row xs={1} sm={2} md={2} lg={3} xl={3} xxl={3} className="g-5">
{sub_pack.sub_pack.map(p => (
  <Col>
    <Card>
      <Card.Img variant="top" src={p.p_image}/>
      <Card.Body>
        <Card.Title className='ct'>{p.t_place}</Card.Title>
        <Link to = {`/details/${name}/${p.t_place}`}>
        <Button variant = 'success'>Details</Button>
        </Link>
      </Card.Body>
    </Card>
  </Col>
))}
</Row>
</Container>

    </>
  )
}