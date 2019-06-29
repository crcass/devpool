import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ currentUser }) => (
  <footer>
    <h2>This is the footer</h2>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about/">About</Link>
      {currentUser && <Link to="/account/">Account</Link>}
    </nav>
  </footer>
);

export default Footer;
