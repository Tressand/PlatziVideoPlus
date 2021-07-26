/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import Header from '../components/Header';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/containers/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <>
      <Header isLogin notProfile />
      <section className='login'>
        <section className='login__container'>
          <h2>Inicia sesión</h2>
          <form className='login__container--form' onSubmit={handleSubmit}>
            <input
              name='email'
              className='input'
              type='text'
              placeholder='Correo'
              onChange={handleInput}
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
              onChange={handleInput}
            />
            <button type='submit' className='button'>Iniciar sesión</button>
            <div className='login__container--remember-me'>
              <label>
                <input type='checkbox' id='cbox1' value='first_checkbox' />
                {' '}
                Recuérdame
              </label>
              <Link className='login__container--forgot-pasword' to='/password-recover' rel='canonical'>
                <p>Olvidé mi contraseña</p>
              </Link>
            </div>
          </form>
          <section className='login__container--social-media'>
            <div>
              <img src={googleIcon} alt='Google Icon' />
              {' '}
              <a rel='noreferrer' target='_blank' href='http://google.com/'>Inicia sesión con Google</a>
            </div>
            <div>
              <img src={twitterIcon} alt='Twitter Icon' />
              {' '}
              <a rel='noreferrer' target='_blank' href='https://twitter.com/'>Inicia sesión con Twitter</a>
            </div>
          </section>
          <div className='login__container--register'>
            ¿No tienes ninguna cuenta?
            <Link className='login__container--register-button' to='/register' rel='canonical'>
              <p>Regístrate</p>
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
