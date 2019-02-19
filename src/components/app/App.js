import React, { Fragment } from 'react';
import Header from './Header';
import PhotoAlbum from './PhotoAlbum';
import Footer from './Footer';

function App() {
  const albumTitle = 'TBD';
  const albumUrls = ['url1', 'url2', 'url3'];

  return (
    <Fragment>
      <Header />

      <main>
        <h1>Hello World</h1>
        <PhotoAlbum title={albumTitle} urls={albumUrls}/>
      </main>

      <Footer />
    </Fragment>
  );
}

export default App;