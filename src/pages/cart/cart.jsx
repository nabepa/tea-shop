import './cart.scss';
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import React from 'react';
import { useHistory } from 'react-router-dom';

// Todo: 주문 기능

const Cart = ({ cartInfo, dispatch }) => {
  const history = useHistory();

  return (
    <>
      <Button
        className='mx-2 my-2'
        variant='outline-dark'
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </Button>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {['Product', 'Amount', 'Option'].map((attribute, index) => (
              <th key={index}>{attribute}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(cartInfo).map((id, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{cartInfo[id].name}</td>
              <td>
                <button
                  className='stock-button'
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
                  className='stock-button'
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
              <td>{cartInfo[id].option ? cartInfo[id].option : null}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className='my-alert-green'>
        <p>Now on Sale 20% off</p>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    cartInfo: state,
  };
}

export default connect(mapStateToProps)(Cart);
