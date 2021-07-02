import './cart.scss';
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import React from 'react';
import { useHistory } from 'react-router-dom';

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
          {cartInfo.map((info, index) => (
            <tr key={info.id}>
              <td>{index + 1}</td>
              <td>{info.name}</td>
              <td>
                <button
                  className='stock-button'
                  onClick={() => {
                    dispatch({ type: 'DecreaseAmount', payload: info.id });
                  }}
                >
                  -
                </button>
                {info.amount}
                <button
                  className='stock-button'
                  onClick={() => {
                    dispatch({ type: 'IncreaseAmount', payload: info.id });
                  }}
                >
                  +
                </button>
              </td>
              <td>{info.option ? info.option : null}</td>
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
