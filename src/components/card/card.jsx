import { Col } from 'react-bootstrap';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Card = ({ product }) => {
  const history = useHistory();
  return (
    <Col
      md='4'
      onClick={() => {
        history.push(`/detail/${product.id}`);
      }}
    >
      <img
        src={`https://codingapple1.github.io/shop/shoes${product.id + 1}.jpg`}
        width='100%'
        alt='test'
      />
      <h4>{product.title}</h4>
      <p>{product.content}</p>
      <p>{product.price}</p>
    </Col>
  );
};

export default Card;
