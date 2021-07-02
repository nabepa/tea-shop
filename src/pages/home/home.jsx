import React, { memo } from 'react';
import { Jumbotron, Button, Container, Row } from 'react-bootstrap';
import Card from '../../components/card/card';
import axios from 'axios';

const Home = memo(({ merchandises, showMore }) => (
  <>
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

    <Button
      variant='primary'
      onClick={() => {
        axios
          .get('https://codingapple1.github.io/shop/data2.json')
          .then((res) => {
            showMore(res.data);
          })
          .catch((res) => {
            console.log(res.status);
          });
      }}
    >
      Show More
    </Button>
  </>
));

export default Home;
