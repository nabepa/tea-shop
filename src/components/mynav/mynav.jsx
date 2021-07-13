import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Mynav = ({ user, onSignOut }) => (
  <Navbar bg='light' expand='lg'>
    <Container>
      <Navbar.Brand as={Link} to='/'>
        Tea World
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <Nav.Link as={Link} to='/'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to='/green'>
            Green Tea
          </Nav.Link>
          <Nav.Link as={Link} to='/rooibos'>
            Rooibos Tea
          </Nav.Link>
          <Nav.Link as={Link} to='/herbal'>
            Herbal Tea
          </Nav.Link>
          <Nav.Link as={Link} to='/cart'>
            My Cart
          </Nav.Link>
          {user ? (
            <button onClick={onSignOut}>Sign Out</button>
          ) : (
            <Nav.Link as={Link} to='/signin'>
              Sign Up/In
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Mynav;
