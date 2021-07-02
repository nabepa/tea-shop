import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app';
import { createStore } from 'redux';
import './common/common.scss';

const initData = [{ id: 0, name: 'White and Black', amount: 2 }];
const store = createStore(reducer);
function reducer(state = initData, action) {
  switch (action.type) {
    case 'AddToCart': {
      const { id, name } = action.payload;
      const newState = [...state];

      const targetIndex = state.findIndex((s) => {
        return s.id === id;
      });
      if (targetIndex === -1) {
        newState.push({ id: id, name: name, amount: 1 });
      } else {
        newState[targetIndex].amount++;
      }
      return newState;
    }

    case 'IncreaseAmount': {
      const targetId = action.payload;
      const newState = [...state];
      newState[targetId].amount++;
      return newState;
    }

    case 'DecreaseAmount': {
      const targetId = action.payload;
      const newState = [...state];
      newState[targetId].amount && newState[targetId].amount--;
      return newState;
    }

    default:
      return state;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
