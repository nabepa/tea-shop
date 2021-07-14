import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './common/common.scss';
import App from './app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { cartReducer } from './reducer/reducer';
import { BrowserRouter } from 'react-router-dom';
import HttpClient from './network/http';
import AuthService from './service/auth';
import TokenStorage from './db/token';
import { AuthErrorEventBus, AuthProvider } from './context/auth-context';
import ProductRepository from './data/products-firebase';

const baseURL = process.env.REACT_APP_BASE_URL;
const tokenStorage = new TokenStorage();
const authErrorEventBus = new AuthErrorEventBus();
const httpClient = new HttpClient(baseURL, authErrorEventBus);
const authService = new AuthService(httpClient, tokenStorage);

const store = createStore(cartReducer);
const productRepository = new ProductRepository();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider
        authService={authService}
        authErrorEventBus={authErrorEventBus}
      >
        <Provider store={store}>
          <App productRepository={productRepository} />
        </Provider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
