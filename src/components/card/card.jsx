import { Col } from 'react-bootstrap';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Card = ({ merchandise }) => {
  const history = useHistory();
  return (
    <Col
      md='4'
      onClick={() => {
        history.push(`/detail/${merchandise.id}`);
      }}
    >
      <img
        src={`https://codingapple1.github.io/shop/shoes${
          merchandise.id + 1
        }.jpg`}
        width='100%'
        alt='test'
      />
      <h4>{merchandise.title}</h4>
      <p>{merchandise.content}</p>
      <p>{merchandise.price}</p>
    </Col>
  );
};

export default Card;
