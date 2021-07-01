import React, { useState } from 'react';
import './app.css';
import {
  Navbar,
  Container,
  Row,
  Nav,
  NavDropdown,
  Jumbotron,
  Button,
} from 'react-bootstrap';
import initData from './data/teas';
import Card from './components/card';

function App() {
  const [merchandises, setMerchandise] = useState(initData);

  return (
    <div className='App'>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>Tea World</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>Link</Nav.Link>
              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Jumbotron className='background'>
        <h1>20% Season Off</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant='primary'>Learn more</Button>
        </p>
      </Jumbotron>

      <Container>
        <Row>
          {merchandises.map((m) => (
            <Card key={m.id} merchandise={m} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
