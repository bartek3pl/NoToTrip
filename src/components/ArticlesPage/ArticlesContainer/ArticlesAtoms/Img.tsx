import React from 'react';

const Img = ({ src, alt, style = {} }) => {
  return <img src={src} alt={alt} style={style} />;
};

export default Img;
