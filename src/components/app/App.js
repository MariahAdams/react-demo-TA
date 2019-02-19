import React, { Fragment } from 'react';
import Header from './Header';
import PhotoAlbum from './PhotoAlbum';
import Footer from './Footer';

function App() {

  return (
    <Fragment>
      <Header />

      <main>
        <h1>Hello World</h1>
        <PhotoAlbum />
      </main>

      <Footer />
    </Fragment>
  );
}

export default App;