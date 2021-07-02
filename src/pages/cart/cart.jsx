import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import React from 'react';

const Cart = ({ cartInfo, dispatch }) => {
  return (
    <>
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
                  onClick={() => {
                    dispatch({ type: 'DecreaseAmount', payload: info.id });
                  }}
                >
                  -
                </button>
                {info.amount}
                <button
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

      <div className='my-alert-red'>
        <p>지금 구매하시면 신규할인 20%</p>
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
