import React from 'react';
import Figure from './Figure';

const Figures2x2 = ({ children, figcaption }) => {
  const AllFourFigures = children.map((child) => (
    <div className="figure-img">
      <div className="article-img-overlay">
        {child}
        <span className="article-img-link d-block rounded">
          <p className="title">{child.alt}</p>
        </span>
      </div>
    </div>
  ));

  return <Figure figcaption={figcaption}>{AllFourFigures}</Figure>;
};

export default Figures2x2;
