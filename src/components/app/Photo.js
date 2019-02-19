import React from 'react';
import PropTypes from 'prop-types';

function Photo({ url }) {

  return (
    <p>{url}</p>
  );
}

Photo.propTypes = {
  url: PropTypes.string.isRequired
};

export default Photo;