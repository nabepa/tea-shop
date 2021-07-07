import React, { useState, useEffect, memo } from 'react';
import { Jumbotron, Container, Row } from 'react-bootstrap';
import Card from '../../components/card/card';
import './category.scss';

const Category = memo(({ category, title, productRepository }) => {
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const loadedProducts = await productRepository.getCategoryProducts(
        category
      );
      setCategoryProducts(loadedProducts);
    };
    fetchData();
  }, [category, productRepository]);

  return (
    <>
      {/* Todo: Remove Jumbtron, not supported at future version*/}
      <Jumbotron className={`background-${category}`}>
        <h1>{title}</h1>
      </Jumbotron>

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
