import React from 'react';
import { Col } from 'react-bootstrap';

const Card = ({ merchandise }) => (
  <Col md='4'>
    <img
      src={`https://codingapple1.github.io/shop/shoes${merchandise.id + 1}.jpg`}
      width='100%'
      alt='test'
    />
    <h4>{merchandise.title}</h4>
    <p>{merchandise.content}</p>
    <p>{merchandise.price}</p>
  </Col>
);

export default Card;
