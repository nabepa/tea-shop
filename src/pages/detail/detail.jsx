import './detail.scss';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';

const Detail = memo(({ productRepository, cartInfo, dispatch }) => {
  const { id } = useParams();
  const [alert, setAlert] = useState(true);
  const [tabId, setTabId] = useState(0);
  const history = useHistory();
  const [target, setTarget] = useState();

  const addToCart = () => {
    target &&
      dispatch({
        type: 'AddToCart',
        payload: { id: target.id, name: target.name },
      });
    history.push('/cart');
  };

  useEffect(() => {
    const timmer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timmer);
    };
  }, []);

  useEffect(async () => {
    const newTarget = await productRepository.getById(id);
    setTarget(newTarget);
  }, [id]);

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
        {/* Todo: 서버와 연계, 재고 없는 경우, 재고 적은 경우 */}
        {/* +재고 없으면  add to cart 못누르게 */}
        {alert ? (
          <div className='my-alert-green'>
            <p>Low in Stock</p>
          </div>
        ) : null}
      </header>

      <Container>
        <Row>
          <Col className='mt-4' md={5}>
            <img src={target && target.url} width='100%' />
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
            Related
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
});

// Todo: make as component
function TabContent({ tabId }) {
  switch (tabId) {
    case 0:
      return <div>0</div>;
    case 1:
      return <div>1</div>;
    default:
      return new Error('Not matched tabId!');
  }
}

function mapStateToProps(state) {
  return {
    cartInfo: state,
  };
}

export default connect(mapStateToProps)(Detail);
