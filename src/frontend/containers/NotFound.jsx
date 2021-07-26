/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section>
    <h1>404: Not Found</h1>
    <Link to='/' rel='canonical'>
      <h1>Volver al Home</h1>
    </Link>
  </section>
);

export default NotFound;
