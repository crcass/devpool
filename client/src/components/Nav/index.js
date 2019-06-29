import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logout from '../../components/Logout';

const propTypes = {
  currentUser: PropTypes.object
};

const Nav = ({ currentUser }) => (
  <nav>
    This is a nav bar
    {!currentUser && <Link to="/login/">Login</Link>}
    {currentUser && <Link to="/dashboard/">Dashboard</Link>}
    {currentUser && <Link to="/account/">Account</Link>}
    {currentUser && <Logout />}
  </nav>
);

Nav.propTypes = propTypes;

export default Nav;
