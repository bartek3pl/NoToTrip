import React from 'react';
import A from '../../../../components/ArticlesPage/ArticlesContainer/ArticlesAtoms/A';

const PointLink = ({ children, href }) => {
  return (
    <p className="link">
      <A href={href}>{children}</A>
    </p>
  );
};

export default PointLink;
