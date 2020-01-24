import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';

const Carousel = ({ figcaption, children }) => {
  const items = children.map((child) => (
    <BootstrapCarousel.Item>{child}</BootstrapCarousel.Item>
  ));

  return (
    <figure className="article-figure">
      <BootstrapCarousel>{items}</BootstrapCarousel>
      <figcaption className="article-figcaption">{figcaption}</figcaption>
    </figure>
  );
};

export default Carousel;
