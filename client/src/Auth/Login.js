import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLogin } from './actions';
import providers from './providers';

const renderButtons = (history, providers, userLogin) =>
  providers.map(provider => (
    <button
      key={provider.name}
      onClick={() => userLogin(history, provider.method)}
    >
      Sign In with {provider.name}
    </button>
  ));

const Login = ({ history, userLogin }) => (
  <div>{renderButtons(history, providers, userLogin)}</div>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators({ userLogin }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Login);
