import './home.scss';
import React, { memo, useCallback, useState, useEffect } from 'react';
import { Jumbotron, Button, Container, Row } from 'react-bootstrap';
import Card from '../../components/card/card';

const Home = memo(({ productRepository }) => {
  const [products, setProducts] = useState({});
  const showMore = useCallback(
    async (cursorId) => {
      const added = await productRepository.getMore(cursorId);
      setProducts((prevState) => {
        const newStates = { ...prevState, ...added };
        return newStates;
      });
    },
    [productRepository]
  );

  useEffect(() => {
    showMore('');
  }, [showMore]);

  return (
    <>
      {/* Todo: Remove Jumbtron, not supported */}
      <Jumbotron className='home__jumbotron'>
        <Container>
          <h1>20th anniversary sale - 20% off</h1>
          <p className='jumbotron__description'>
            To show our gratitude for our 20th anniversary, we will be holding
            an event with 20% off all products!
          </p>

          {/* Todo: Do Something when it is clicked */}
          {/* <div className='container-btn'>
          <Button variant='info'>
            Learn more
          </Button>
        </div> */}
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          {Object.keys(products).map((id) => (
            <Card key={id} product={products[id]} />
          ))}
        </Row>
      </Container>
      <div className='container-btn'>
        <Button
          className='my-3'
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
