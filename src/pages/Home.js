import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


function Home() {
  const [restaurants, setRestaurants] = useState([])

  // function api call
  const getAllRestaurant = async () => {
    const result = await axios.get('/restaurants.json')
    setRestaurants(result.data.restaurants);
  }

  useEffect(() => {
    getAllRestaurant()
  }, [])

  console.log(restaurants);
  return (
    
   <div>
     <Row>
        <Col xs={12} sm={6} className='ms-5 mt-5' >
          <Container>
            <h1 className='pt-5'>
              <span className='text-warning'>F</span>ind <span className='text-warning'>Y</span>our<span className='text-warning'>F</span>ood
            </h1>
            <p className='ms-3 mt-3 test-start w-75'>Welcome to our culinary haven, where the world of flavors unfolds at your fingertips. Our food website is your passport to a gastronomic adventure like no other. From mouthwatering recipes that will inspire your inner chef to insightful articles exploring food trends and nutrition, we're here to tantalize your taste buds and nourish your curiosity. Whether you're a seasoned home cook or a novice in the kitchen, our collection of recipes caters to all skill levels and preferences, ensuring you'll find something to satisfy your cravings. Join our passionate community of food enthusiasts, and embark on a delicious journey with us today. Bon appétit!.</p>
          </Container>
        </Col>
        <Col className='mt-4 text-center'>
          <img className='w-75' style={{ height: '500px' }}
            src='https://i.postimg.cc/wMgCR29Q/abillion-Bl-Qc1-APEa-L0-unsplash-removebg-preview.png'
            alt="" />
        </Col>
      </Row>
      <hr />
      <Container>
        <Row>
  
          {
            restaurants.length > 0 ? restaurants.map(i =>
  
              <Col xs={12} sm={6} lg={4} md={6}>
                <Link to={`/view/${i.id}`} style={{ textDecoration: 'none' }}>
                  <Card style={{ width: '80%', height: '550px' }} className='m-4'>
                    <Card.Img
                      style={{ height: '400px' }}
                      variant="top" src={i.photograph} />
                    <Card.Body>
                      <Card.Title className='text-center text-warning'>{i.name}</Card.Title>
                      <Card.Text>
                        <b>Address</b> {i.address}
                      </Card.Text>
                    </Card.Body>
                  </Card>
  
                </Link>            </Col>
  
            ) : <h1>No Data Present</h1>
          }
  
  
        </Row>
      </Container>
      

   </div>
)}

export default Home