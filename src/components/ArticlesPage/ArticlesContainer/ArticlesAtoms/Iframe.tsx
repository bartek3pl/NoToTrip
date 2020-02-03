import React from 'react';

const Iframe = ({ src, title }) => {
  return <iframe className="gmap" src={src} title={title} />;
};

export default Iframe;
