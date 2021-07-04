import './app.scss';
import { Switch, Route, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import React from 'react';
import Home from './pages/home/home';
import Detail from './pages/detail/detail';
import Cart from './pages/cart/cart';
import Category from './pages/category/category';

function App({ productRepository }) {
  return (
    <div className='App'>
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path='/'>
          <Home productRepository={productRepository} />
        </Route>
        <Route path='/detail/:id'>
          <Detail productRepository={productRepository} />
        </Route>
        <Route path='/green'>
          <Category
            category='green'
            title='Green Tea'
            productRepository={productRepository}
          />
        </Route>
        <Route path='/rooibos'>
          <Category
            category='rooibos'
            title='Rooibos Tea'
            productRepository={productRepository}
          />
        </Route>
        <Route path='/herbal'>
          <Category
            category='herbal'
            title='Herbal Tea'
            productRepository={productRepository}
          />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/purchase'>
          <section className='purchase'>
            <p>Thank you for purchasing!</p>
          </section>
        </Route>
        <Route path='/:id'>
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
