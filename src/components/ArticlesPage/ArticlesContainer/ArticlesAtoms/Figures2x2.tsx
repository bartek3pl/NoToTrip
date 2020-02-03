import React from 'react';
import Figure from './Figure';

const Figures2x2 = ({ children, figcaption }) => {
  const AllFourFigures = children.map((child) => (
    <div className="figure-img">{child}</div>
  ));

  return <Figure figcaption={figcaption}>{AllFourFigures}</Figure>;
};

export default Figures2x2;
