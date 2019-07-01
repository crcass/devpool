import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import StyledFooter from './layout/StyledFooter';

const Footer = ({ auth, currentUser, location }) => (
  <StyledFooter auth={auth} location={location}>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about/">About</Link>
      {currentUser && <Link to="/account/">Account</Link>}
    </nav>
  </StyledFooter>
);

export default withRouter(Footer);
