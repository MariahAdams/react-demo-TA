import React, { Fragment } from 'react';
import Header from './Header';
import PhotoAlbum from './PhotoAlbum';
import Footer from './Footer';
import panda1 from '../../assets/panda1.jpg';
import panda2 from '../../assets/panda2.jpg';
import panda3 from '../../assets/panda3.jpg';

function App() {
  const albumTitle = 'All da Pandas';
  const albumUrls = [panda1, panda2, panda3];

  return (
    <Fragment>
      <Header />

      <main>
        <h1>Photo Album Demo</h1>
        <PhotoAlbum title={albumTitle} urls={albumUrls}/>
      </main>

      <Footer />
    </Fragment>
  );
}

export default App;