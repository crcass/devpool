import React from 'react';
import PropTypes from 'prop-types';
import PersonContainer from '../../shared/PersonContainer';

const propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

const Profile = ({ image, name }) => (
  <PersonContainer>
    <h2>Profile</h2>
    <img src={image} alt={name} />
    <h3>{name}</h3>
  </PersonContainer>
);

Profile.propTypes = propTypes;

export default Profile;
