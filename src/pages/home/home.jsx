import './home.scss';
import React, { memo } from 'react';
import { Jumbotron, Button, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import Card from '../../components/card/card';

const Home = memo(({ products, showMore }) => (
  <>
    {/* Todo: Remove Jumbtron, not supported */}
    <Jumbotron className='background'>
      <h1>20th anniversary sale - 20% off</h1>
      <p className='event-description'>
        To show our gratitude for our 20th anniversary, we will be holding an
        event with 20% off all products!
      </p>
      <div className='button-container'>
        {/* Todo: Do Something when it is clicked */}
        <Button className='button-container' variant='info'>
          Learn more
        </Button>
      </div>
    </Jumbotron>

    <Container>
      <Row>
        {products.map((m) => (
          <Card key={m.id} product={m} />
        ))}
      </Row>
    </Container>

    <div className='button-container'>
      <Button
        className='mb-3'
        variant='info'
        // Todo: dependency injection (axios)
        onClick={() => {
          axios
            .get('https://codingapple1.github.io/shop/data2.json')
            .then((res) => {
              console.log(res.data);
              showMore(res.data);
            })
            .catch((res) => {
              console.log(res.status);
            });
        }}
      >
        Show More
      </Button>
    </div>
  </>
));

export default Home;
