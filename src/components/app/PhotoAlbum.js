import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';

function PhotoAlbum({ title, urls }) {

  return (
    <div>
      <h2>{title}</h2>
      <Photos urls={urls}/>
    </div>
  );
}

PhotoAlbum.propTypes = {
  title: PropTypes.string.isRequired,
  urls: PropTypes.array.isRequired
};

export default PhotoAlbum;