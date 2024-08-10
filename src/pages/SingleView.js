import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Reviews from '../components/Reviews';
import Operating from '../components/Operating';

function SingleView() {
  const [allrestaurants, setRestaurants] = useState([]);

  const param = useParams();
  const { id } = param; // Destructuring

  const getAllRest = async () => {
    const result = await axios.get('/restaurants.json');
    setRestaurants(result.data.restaurants);
  };

  useEffect(() => {
    getAllRest();
  }, []);

  // find single rest
  const singleRest = allrestaurants.find(i => i.id == id);
  console.log(singleRest);

  return (
    <div>
      {singleRest ? (
        <Row>
          <Col lg={5} sm={12} xs={12} md={6} className='py-5 ps-5 ms-5 mt-5 mb-5'>
            <img style={{ height: '500px', width: '60%' }} src={singleRest.photograph} alt="" />
          </Col>
          <Col className='text-start'>
            <h1 className='text center mt-3 text-warning'>{singleRest.name}</h1>
            <ListGroup className='me-5 pe-5 w-75 fs-4'>
              <ListGroup.Item className='mt-4'>
                <b><span className='text-warning me-5'>Address</span>{singleRest.address}</b>
              </ListGroup.Item>
              <ListGroup.Item className='mt-4'>
                <b><span className='text-warning me-5'>Cuisine Type</span>{singleRest.cuisine_type}</b>
              </ListGroup.Item>
              <ListGroup.Item className='mt-4'>
                <b><span className='text-warning me-5'>Neighborhood</span><br />{singleRest.neighborhood}</b>
              </ListGroup.Item>
              <ListGroup.Item className='mt-4'></ListGroup.Item>
              <Operating operatingData={singleRest.operating_hours}></Operating>
              <ListGroup.Item className='mt-4'>
                <Reviews reviews={singleRest.reviews}></Reviews>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleView;