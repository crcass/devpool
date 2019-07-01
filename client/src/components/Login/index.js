import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../../shared/Main';
import Hero from '../../shared/Hero';
import { userLogin } from '../../actions/auth';
import providers from '../../auth/providers';

const propTypes = {
  history: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  loggingIn: PropTypes.bool.isRequired,
  userLogin: PropTypes.func.isRequired
};

const renderButtons = (history, loggedIn, loggingIn, providers, userLogin) =>
  providers.map(provider => (
    <div key={provider.name}>
      <h3>{provider.title}</h3>
      <p>{provider.text}</p>
      <button
        disabled={loggingIn || loggedIn}
        onClick={() => userLogin(history, provider.method)}
      >
        Sign In with {provider.name}
      </button>
    </div>
  ));

const Login = ({ history, loggedIn, loggingIn, userLogin }) => {
  useEffect(() => {});
  return (
    <Main>
      <Hero>
        {renderButtons(history, loggedIn, loggingIn, providers, userLogin)}
      </Hero>
    </Main>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  loggingIn: state.auth.loggingIn
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ userLogin }, dispatch);

Login.propTypes = propTypes;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
