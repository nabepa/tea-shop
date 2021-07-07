import './detail.scss';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TabContents from '../../components/tab/tab-contents';

const Detail = memo(({ productRepository, dispatch }) => {
  const { id } = useParams();
  const [target, setTarget] = useState();
  const [alert, setAlert] = useState(false);
  const [tabId, setTabId] = useState(0);
  const history = useHistory();

  const addToCart = () => {
    target &&
      dispatch({
        type: 'AddToCart',
        payload: { id: target.id, name: target.name, price: target.price },
      });
    history.push('/cart');
  };

  useEffect(() => {
    const fetchData = async () => {
      const newTarget = await productRepository.getById(id);
      setTarget(newTarget);
    };
    fetchData();
  }, [id, productRepository]);

  useEffect(() => {
    if (target && target.stock <= 5) {
      setAlert(true);
      const timmer = setTimeout(() => {
        setAlert(false);
      }, 2000);
      return () => {
        clearTimeout(timmer);
      };
    }
  }, [target]);

  return (
    <>
      <header className='detail-header'>
        <Button
          className='mx-2 my-3'
          variant='outline-dark'
          onClick={() => {
            history.goBack();
          }}
        >
          Back
        </Button>
        {/* 재고 없으면  add to cart 못누르게 */}
        {alert ? (
          <div className='my-alert-green'>
            <p>Low in Stock</p>
          </div>
        ) : null}
      </header>

      <Container>
        <Row>
          <Col className='mt-4' md={5}>
            <img
              src={target && target.url}
              width='100%'
              alt={target && target.name}
            />
          </Col>
          <Col className='mt-4' md={6}>
            <div className='detail-left'>
              <h4 className='pt-5'>{target && target.name}</h4>
              <p>{target && target.flavour}</p>
              <p>$ {target && target.price}</p>
              <p>{target && target.stock} EA</p>
              <Button variant='outline-success' onClick={addToCart}>
                Add To Cart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Nav className='mt-5' variant='tabs' defaultActiveKey='link-0'>
        <Nav.Item>
          <Nav.Link
            eventKey='link-0'
            onClick={() => {
              setTabId(0);
            }}
          >
            Product Information
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            variant='success'
            eventKey='link-1'
            onClick={() => {
              setTabId(1);
            }}
          >
            How To Drink
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContents tabId={tabId} product={target} />
    </>
  );
});

function mapStateToProps(state) {
  return {
    cartInfo: state,
  };
}

export default connect(mapStateToProps)(Detail);
