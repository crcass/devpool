import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logout from '../../components/Logout';

const propTypes = {
  currentUser: PropTypes.object
};

const Nav = ({ currentUser }) => (
  <nav>
    {currentUser && <Link to="/dashboard/">Dashboard</Link>}
    {currentUser && <Link to="/account/">Account</Link>}
    This is a nav bar
    {currentUser && <Logout />}
  </nav>
);

Nav.propTypes = propTypes;

export default Nav;
