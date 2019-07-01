import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Menu from '../Menu';
import StyledHeader from './layout/StyledHeader';
import account from '../../shared/images/account.png';

const Header = ({ auth, location }) => (
  <StyledHeader auth={auth} location={location}>
    <Menu />
    <h2>Devpool</h2>
    <button>
      <Link to={auth.currentUser ? '/account/' : '/login/'}>
        <img src={account} alt="account" />
      </Link>
    </button>
  </StyledHeader>
);

export default withRouter(Header);
