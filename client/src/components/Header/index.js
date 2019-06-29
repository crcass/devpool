import React from 'react';
import Nav from '../Nav';

const Header = ({ currentUser }) => (
  <header>
    <h2>BRAND</h2>
    <Nav currentUser={currentUser} />
  </header>
);

export default Header;
