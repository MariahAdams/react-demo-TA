import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

function Photos({ urls }) {
  const listOfPhotos = urls.map(url => {
    return <li key={url}><Photo url={url}/></li>;
  });

  return (
    <ul>
      {listOfPhotos}
    </ul>
  );
}

Photos.propTypes = {
  urls: PropTypes.array.isRequired
};

export default Photos;