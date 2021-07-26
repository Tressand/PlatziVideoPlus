import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Footer.scss';

const Footer = () => (
  <footer className='footer'>
    <Link className='footer--link' to='/terms' rel='canonical'>
      <p>Terminos de uso</p>
    </Link>
    <Link className='footer--link' to='/privacy' rel='canonical'>
      <p>Declaración de privacidad</p>
    </Link>
    <Link className='footer--link' to='/help' rel='canonical'>
      <p>Centro de ayuda</p>
    </Link>
  </footer>

);

export default Footer;
