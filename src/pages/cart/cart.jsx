import React from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './cart.scss';

// Todo: 주문 서버와 연계
const Cart = ({ cartInfo, dispatch }) => {
  const history = useHistory();

  return (
    <Container className='cart'>
      <header className='cart__header'>
        <Button
          className='mx-3 my-2'
          variant='outline-dark'
          onClick={() => {
            history.goBack();
          }}
        >
          Back
        </Button>
        {/* Todo: use banner component */}
        <div className='my-alert-green'>
          <p>Now on Sale 20% off</p>
        </div>
        <Button
          className='mx-3 my-2'
          variant='outline-dark'
          onClick={() => {
            if (calcTotal(cartInfo) !== 0) {
              history.push('/purchase');
            } else {
              alert('Your cart have any products!');
            }
          }}
        >
          Order
        </Button>
      </header>

      <Table className='cart__list' responsive>
        <thead>
          <tr>
            <th>#</th>
            {['Product', 'Amount', 'Price'].map((attribute, index) => (
              <th key={index}>{attribute}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(cartInfo).map((id, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{cartInfo[id].name}</td>
              <td className='number'>
                <button
                  className='amount-btn'
                  onClick={() => {
                    dispatch({
                      type: 'DecreaseAmount',
                      payload: cartInfo[id].id,
                    });
                  }}
                >
                  -
                </button>
                {cartInfo[id].amount}
                <button
                  className='amount-btn'
                  onClick={() => {
                    dispatch({
                      type: 'IncreaseAmount',
                      payload: cartInfo[id].id,
                    });
                  }}
                >
                  +
                </button>
              </td>
              <td className='number' colSpan='1'>
                $ {Number.parseFloat(cartInfo[id].pay).toFixed(2)}
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan='3'>TOTAL : </td>
            <td className='number' colSpan='1'>
              $ {Number.parseFloat(calcTotal(cartInfo)).toFixed(2)}
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

function calcTotal(cartInfo) {
  let total = 0;
  for (let id in cartInfo) {
    total += cartInfo[id].pay;
  }
  return total;
}

function mapStateToProps(state) {
  return {
    cartInfo: state,
  };
}

export default connect(mapStateToProps)(Cart);
