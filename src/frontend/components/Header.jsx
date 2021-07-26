import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user, isLogin, isRegister, notProfile } = props;

  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
    notProfile,
  });

  return (
    <header className={headerClass}>
      <Link to='/' rel='canonical'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>

          {
            hasUser ?
              <img src={gravatar(user.email)} alt='Perfil' /> :
              <img src={userIcon} alt='Perfil' />
          }

          {
            hasUser ? (
              <p>
                {user.name}
              </p>
            ) :
              <p>Perfil</p>
          }

        </div>
        <ul>

          <Link className='header__menu--link' to='/account' rel='canonical'>
            <li><p>Cuenta</p></li>
          </Link>

          {
            hasUser ? (
              <Link className='header__menu--link' to='/login' href='#logout' onClick={handleLogout} rel='canonical'>
                <li><p>Cerrar Sesión</p></li>
              </Link>
            ) : (
              <Link className='header__menu--link' to='/login' rel='canonical'>
                <li><p>Iniciar Sesión</p></li>
              </Link>
            )
          }

        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
