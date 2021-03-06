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

          {user && user.admin ? (
            <Nav.Link as={Link} to='/manage'>
              Manage
            </Nav.Link>
          ) : undefined}
        </Nav>
      </Navbar.Collapse>

      <Navbar.Collapse className='justify-content-end'>
        {user ? (
          <Nav.Link onClick={onSignOut}>Sign Out</Nav.Link>
        ) : (
          <Nav.Link as={Link} to='/sign'>
            Sign Up/In
          </Nav.Link>
        )}
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Mynav;
