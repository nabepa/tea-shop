import './home.scss';
import { Jumbotron, Button, Container, Row } from 'react-bootstrap';
import Card from '../../components/card/card';
import React, { memo, useState } from 'react';
import { useEffect } from 'react';

const Home = memo(({ productRepository }) => {
  const [products, setProducts] = useState({});
  const showMore = async (cursorId) => {
    const added = await productRepository.getMore(cursorId);
    setProducts((prevState) => {
      const newStates = { ...prevState, ...added };
      return newStates;
    });
  };

  useEffect(() => {
    showMore('');
  }, []);

  return (
    <>
      {/* Todo: Remove Jumbtron, not supported */}
      <Jumbotron className='background-home'>
        <h1>20th anniversary sale - 20% off</h1>
        <p className='event-description'>
          To show our gratitude for our 20th anniversary, we will be holding an
          event with 20% off all products!
        </p>
        <div className='button-container'>
          {/* Todo: Do Something when it is clicked */}
          {/* <Button className='button-container' variant='info'>
            Learn more
          </Button> */}
        </div>
      </Jumbotron>

      <Container>
        <Row>
          {Object.keys(products).map((id) => (
            <Card key={id} product={products[id]} />
          ))}
        </Row>
      </Container>

      <div className='button-container'>
        <Button
          className='mb-3'
          variant='info'
          onClick={() => {
            showMore(Object.keys(products).pop());
          }}
        >
          Show More
        </Button>
      </div>
    </>
  );
});

export default Home;
