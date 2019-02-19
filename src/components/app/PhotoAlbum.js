import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';

function PhotoAlbum({ title, urls }) {

  return (
    <div>
      PhotoAlbum Component {title}
      <Photos urls={urls}/>
    </div>
  );
}

PhotoAlbum.propTypes = {
  title: PropTypes.string.isRequired,
  urls: PropTypes.array.isRequired
};

export default PhotoAlbum;