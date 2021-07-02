import { Switch, Route, Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './app.css';
import initData from './data/teas';
import React, { useState, useCallback } from 'react';
import Home from './pages/home/home';
import Detail from './pages/detail/detail';
import Cart from './pages/cart/cart';

function App() {
  const [merchandises, setMerchandises] = useState(initData);
  const [stocks, setStocks] = useState({ 0: 10, 1: 7, 2: 12 });
  const showMore = useCallback((added) => {
    setMerchandises((prevState) => {
      const newStates = [...prevState, ...added];
      return newStates;
    });
  }, []);

  return (
    <div className='App'>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>Tea World</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/cart'>
                My Cart
              </Nav.Link>
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

      <Switch>
        <Route exact path='/'>
          <Home merchandises={merchandises} showMore={showMore} />
        </Route>
        <Route path='/detail/:id'>
          <Detail merchandises={merchandises} stocks={stocks} />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/:id'>
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
