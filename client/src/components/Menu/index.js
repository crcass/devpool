import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MenuContainer from './layout/MenuContainer';
import Nav from '../Nav';
import { toggleMenu } from '../../actions/menu';
import button from '../../shared/images/button.png';

const propTypes = {
  open: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

const Menu = ({ open, toggleMenu }) => (
  <>
    <button onClick={toggleMenu}>
      <img src={button} alt="button" />
    </button>
    <MenuContainer open={open}>
      <Nav />
    </MenuContainer>
  </>
);

const mapStateToProps = state => ({
  open: state.menu.open
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleMenu }, dispatch);

Menu.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
