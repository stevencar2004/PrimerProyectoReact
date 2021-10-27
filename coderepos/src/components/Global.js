import React from 'react';
import Header from './Header';

function Global(props) {
  // const children = props.children;

  return (
    <React.Fragment>
      <Header />
      {props.children}
    </React.Fragment>
  );
}

export default Global;