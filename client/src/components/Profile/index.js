import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

const Profile = ({ image, name }) => (
  <div>
    <h2>Profile</h2>
    <img src={image} alt={name} />
    <h3>{name}</h3>
  </div>
);

Profile.propTypes = propTypes;

export default Profile;
