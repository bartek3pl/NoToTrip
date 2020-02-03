import React from 'react';

const P = ({ children, style = {} }) => {
  return <p style={style}>{children}</p>;
};

export default P;
