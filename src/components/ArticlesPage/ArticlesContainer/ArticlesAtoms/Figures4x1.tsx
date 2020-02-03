import React from 'react';
import Figure from './Figure';

const Figures4x1 = ({ children, figcaption }) => {
  const AllFourFigures = children.map((child) => (
    <div className="four-img">{child}</div>
  ));

  return <Figure figcaption={figcaption}>{AllFourFigures}</Figure>;
};

export default Figures4x1;
