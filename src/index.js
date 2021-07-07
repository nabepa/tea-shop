import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { cartReducer } from './data/reducer';
import App from './app';
import ProductRepository from './service/productRepository';
import './index.css';
import './common/common.scss';

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
