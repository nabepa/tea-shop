import { Jumbotron, Button, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect, memo } from 'react';
import Card from '../../components/card/card';

const Category = memo(({ category, productRepository }) => {
  const history = useHistory();
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(async () => {
    const loadedProducts = await productRepository.getCategoryProducts(
      category
    );
    setCategoryProducts(loadedProducts);
  }, [category]);

  return (
    <>
      {/* Todo: Remove Jumbtron, not supported at future version*/}
      <Jumbotron className='background'>
        <h1>{category}</h1>
        <p className='event-description'>
          To show our gratitude for our 20th anniversary, we will be holding an
          event with 20% off all products!
        </p>
      </Jumbotron>

      <h1></h1>

      <Container>
        <Row>
          {categoryProducts &&
            categoryProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))}
        </Row>
      </Container>
    </>
  );
});

export default Category;
