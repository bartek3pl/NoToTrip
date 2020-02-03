import React from 'react';
import Figcaption from './Figcaption';

const Figure = ({ children, figcaption }) => {
  return (
    <figure className="article-figure">
      {children}
      <Figcaption>{figcaption}</Figcaption>
    </figure>
  );
};

export default Figure;
