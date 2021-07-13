import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Mynav from './components/mynav/mynav';
import Home from './pages/home/home';
import Detail from './pages/detail/detail';
import Cart from './pages/cart/cart';
import Category from './pages/category/category';
import Signin from './pages/sign-form/sign-form';
import { useAuth } from './context/auth-context';
import './app.scss';

function App({ productRepository }) {
  const { user, signUp, signIn, signOut } = useAuth();

  return (
    <div className='App'>
      <Mynav user={user} onSignOut={signOut} />
      <Switch>
        <Route exact path='/'>
          <Home productRepository={productRepository} />
        </Route>
        <Route path='/detail/:id'>
          <Detail productRepository={productRepository} />
        </Route>
        <Route path='/green'>
          <Category
            category='green'
            title='Green Tea'
            productRepository={productRepository}
          />
        </Route>
        <Route path='/rooibos'>
          <Category
            category='rooibos'
            title='Rooibos Tea'
            productRepository={productRepository}
          />
        </Route>
        <Route path='/herbal'>
          <Category
            category='herbal'
            title='Herbal Tea'
            productRepository={productRepository}
          />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/purchase'>
          <section className='purchase'>
            <p>Thank you for purchasing!</p>
          </section>
        </Route>
        <Route path='/sign'>
          <Signin user={user} onSignUp={signUp} onSignIn={signIn} />
        </Route>
        <Route path='/:id'>
          <h1>Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
