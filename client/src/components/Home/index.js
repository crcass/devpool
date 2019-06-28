import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>This is the Home Page</h1>
      <Link to="/login/" type="button">
        Get Started
      </Link>
    </div>
  );
};

export default Home;
