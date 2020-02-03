import React from 'react';
import { Link as ReachLink } from '@reach/router';

const LinkToArticle = ({ to, children }) => {
  return <ReachLink to={to}>{children}</ReachLink>;
};

export default LinkToArticle;
