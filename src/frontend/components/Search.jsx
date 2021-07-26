import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { searchVideo } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const [search, setValue] = useState('');

  useEffect(() => {
    props.searchVideo(search);
  });

  const handleInput = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input name='search' type='text' className='input' placeholder='Buscar...' onChange={handleInput} />
    </section>
  );
};

const mapDispatchToProps = {
  searchVideo,
};

export default connect(null, mapDispatchToProps)(Search);
