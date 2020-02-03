import React from 'react';
import { Link as ReachLink } from '@reach/router';

const LinkToArticle = ({ to, children, style = {} }) => {
  return (
    <p className="link-to-article" style={style}>
      <ReachLink to={to}>
        {children}
        <i className="icon-angle-right" />
      </ReachLink>
    </p>
  );
};

export default LinkToArticle;
