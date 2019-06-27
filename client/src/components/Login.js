import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLogin } from '../actions/auth';
import providers from '../auth/providers';

const propTypes = {
  history: PropTypes.object.isRequired,
  loggingIn: PropTypes.bool.isRequired,
  userLogin: PropTypes.func.isRequired
};

const renderButtons = (history, loggingIn, providers, userLogin) =>
  providers.map(provider => (
    <button
      key={provider.name}
      disabled={loggingIn}
      onClick={() => userLogin(history, provider.method)}
    >
      Sign In with {provider.name}
    </button>
  ));

const Login = ({ history, loggingIn, userLogin }) => (
  <div>{renderButtons(history, loggingIn, providers, userLogin)}</div>
);

const mapStateToProps = state => ({
  loggingIn: state.auth.loggingIn
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ userLogin }, dispatch);

Login.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
