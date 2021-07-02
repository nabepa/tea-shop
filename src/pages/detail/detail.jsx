import { useHistory, useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import './detail.scss';
import { CSSTransition } from 'react-transition-group';
import React, { useEffect, useState } from 'react';
import Stock from '../../components/stock/stock';
import { connect } from 'react-redux';

const Detail = ({ merchandises, stocks, cartInfo, dispatch }) => {
  const { id } = useParams();
  const [alert, setAlert] = useState(true);
  const [tabId, setTabId] = useState(0);
  const target = merchandises.find((m) => m.id === parseInt(id));
  const history = useHistory();

  const addToCart = () => {
    dispatch({
      type: 'AddToCart',
      payload: { id: target.id, name: target.title },
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
        {alert ? (
          <div className='my-alert-red'>
            <p>재고가 얼마 남지 않았습니다</p>
          </div>
        ) : null}
        <Row>
          <Col md={6}>
            <img
              src={`https://codingapple1.github.io/shop/shoes${
                target.id + 1
              }.jpg`}
              width='100%'
            />
          </Col>
          <Col md={6} className='mt-4'>
            <h4 className='pt-5'>{target.title}</h4>
            <p>{target.content}</p>
            <p>{target.price}</p>
            <Stock stockCount={stocks[target.id]} />
            <Button variant='success' onClick={addToCart}>
              Add To Cart
            </Button>
            <Button variant='success'>Back</Button>
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
            Option 0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey='link-1'
            onClick={() => {
              setTabId(1);
            }}
          >
            Option 1
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={true} classNames='anim-tab' timeout={500}>
        <TabContent tabId={tabId} />
      </CSSTransition>
    </>
  );
};

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
