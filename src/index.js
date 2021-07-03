import './index.css';
import './common/common.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import ProductRepository from './service/productRepository';
import { cartReducer } from './data/reducer';

const store = createStore(cartReducer);
const productRepository = new ProductRepository();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App productRepository={productRepository} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
