import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { Col } from 'react-bootstrap';

const Card = memo(({ product }) => {
  const history = useHistory();

  return (
    <Col
      md='4'
      onClick={() => {
        history.push(`/detail/${product.id}`);
      }}
    >
      <img src={product.url} width='100%' alt='test' />
      <h4>{product.name}</h4>
      <p>{product.flavour}</p>
      <p>$ {product.price}</p>
    </Col>
  );
});

export default Card;
