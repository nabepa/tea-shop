import { useHistory, useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const Detail = ({ products, cartInfo, dispatch }) => {
  const { id } = useParams();
  const [alert, setAlert] = useState(true);
  const [tabId, setTabId] = useState(0);
  const history = useHistory();
  const target = products.find((m) => m.id === id);

  const addToCart = () => {
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

  return (
    <>
      <Container>
        {/* Todo: 서버와 연계, 재고 없는 경우, 재고 적은 경우 */}
        {/* +재고 없으면  add to cart 못누르게 */}
        {alert ? (
          <div className='my-alert-black'>
            <p>Low in Stock</p>
          </div>
        ) : null}
        <Row>
          <Col className='mt-5' md={6}>
            <img src={target.url} width='100%' />
          </Col>
          <Col className='mt-4' md={6}>
            <h4 className='pt-5'>{target.name}</h4>
            <p>{target.flavour}</p>
            <p>$ {target.price}</p>
            <p>{target.stock} EA</p>
            <Button variant='outline-success' onClick={addToCart}>
              Add To Cart
            </Button>
            <Button
              className='mx-2'
              variant='outline-success'
              onClick={() => {
                history.goBack();
              }}
            >
              Back
            </Button>
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
};

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
