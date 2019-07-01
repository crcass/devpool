import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../../shared/Main';
import Hero from '../../shared/Hero';

const Home = () => {
  return (
    <Main>
      <Hero>
        <h1>Welcome to Devpool</h1>
        <Link to="/login/">ENTER</Link>
      </Hero>
    </Main>
  );
};

export default Home;
