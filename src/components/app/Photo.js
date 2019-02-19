import React from 'react';
import PropTypes from 'prop-types';

function Photo({ url }) {

  return (
    <img src={url} alt="panda"/>
  );
}

Photo.propTypes = {
  url: PropTypes.string.isRequired
};

export default Photo;