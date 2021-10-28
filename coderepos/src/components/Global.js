import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Global(props) {
  // const children = props.children;

  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default Global;