import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
         <Navbar className="bg-warning">
        <Container>
          <Navbar.Brand >
           <Link to={"/"}>
              <img
                alt=""
                src="https://i.postimg.cc/vZdZ0wHP/png-image.png"
                width="80"
                height="65"
                className="d-inline-block align-top"
              />
           </Link>
          <b className='text-white ms-4 mt-4 fs-2'><span className='text-black'>F</span>ood <span className='text-black'>L</span>ane</b>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header