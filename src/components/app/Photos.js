import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import styles from './Photos.css';

function Photos({ urls }) {
  const listOfPhotos = urls.map(url => {
    return <li key={url}><Photo url={url}/></li>;
  });

  return (
    <ul className={styles.photos}>
      {listOfPhotos}
    </ul>
  );
}

Photos.propTypes = {
  urls: PropTypes.array.isRequired
};

export default Photos;