import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Banner from '../../components/banner/banner';
import './sign-form.scss';

const SignForm = ({ user, onSignUp, onSignIn }) => {
  const [signup, setSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [url, setURL] = useState('');
  const [text, setText] = useState('');
  const [isAlert, setIsAlert] = useState(false);
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    if (signup) {
      onSignUp(email, password, name, url).catch(setError);
    } else {
      onSignIn(email, password).catch(setError);
    }
  };

  const setError = (error) => {
    setText(error.toString());
    setIsAlert(true);
  };

  const onChange = (event) => {
    const {
      target: { name, value, checked },
    } = event;
    switch (name) {
      case 'password':
        return setPassword(value);
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'url':
        return setURL(value);
      case 'signup':
        return setSignup(checked);
      default:
    }
  };

  useEffect(() => {
    if (user) {
      history.goBack();
    }
  }, [user, history]);

  return (
    <Container>
      <Banner text={text} isAlert={isAlert} />
      <form className='sign-form' onSubmit={onSubmit}>
        <label className='form-label'>
          Email
          <input
            className='form-input'
            name='email'
            type='email'
            placeholder='Email'
            value={email}
            onChange={onChange}
            required
          />
        </label>
        <label className='form-label'>
          Password
          <input
            className='form-input'
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            autoComplete='on'
            onChange={onChange}
            required
          />
        </label>
        {signup && (
          <label className='form-label'>
            Name
            <input
              className='form-input'
              name='name'
              type='text'
              placeholder='Name'
              value={name}
              onChange={onChange}
              required
            />
          </label>
        )}
        {signup && (
          <label className='form-label'>
            Profile Image URL (option)
            <input
              className='form-input'
              name='url'
              type='url'
              placeholder='Profile Image URL'
              value={url}
              onChange={onChange}
            />
          </label>
        )}
        <div className='form-signup'>
          <input
            name='signup'
            id='signup'
            type='checkbox'
            checked={signup}
            onChange={onChange}
          />
          <label htmlFor='signup'> Create a new account?</label>
        </div>
        <button className='form-btn'>{signup ? 'Sign Up' : 'Sign In'}</button>
      </form>
    </Container>
  );
};

export default SignForm;
