import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import { toggleMenu } from '../../actions/menu';

const propTypes = {
  currentUser: PropTypes.object,
  logout: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

const Nav = ({ currentUser, logout, toggleMenu }) => (
  <nav>
    <ul>
      {!currentUser && (
        <li>
          <Link to="/home/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
      )}
      <li>
        <Link to="/about/" onClick={toggleMenu}>
          About
        </Link>
      </li>
      {currentUser && (
        <li>
          <Link
            to={
              currentUser.provider === 'google.com'
                ? '/dashboard/students'
                : '/dashboard/jobs'
            }
            onClick={toggleMenu}
          >
            Dashboard
          </Link>
        </li>
      )}
      {currentUser && (
        <li>
          <Link to="/account/" onClick={toggleMenu}>
            Account
          </Link>
        </li>
      )}
      {!currentUser && (
        <li>
          <Link to="/login/" onClick={toggleMenu}>
            Login
          </Link>
        </li>
      )}
      {currentUser && (
        <li>
          <button
            onClick={() => {
              logout();
              toggleMenu();
            }}
          >
            Logout
          </button>
        </li>
      )}
    </ul>
  </nav>
);

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ logout, toggleMenu }, dispatch);

Nav.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
