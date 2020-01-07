import React, { FunctionComponent, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { Link as ReachLink } from '@reach/router';
import { convertToUrl } from '../../utils/jsUtils';
import './ArticlesFigures.scss';

interface IProps {
  title: string;
  desc: string;
  img: string;
  caption: string;
}

const ArticlesFigures: FunctionComponent<IProps> = ({
  title,
  desc,
  img,
  caption,
}) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {}, [loaded]);

  return (
    <Col lg={4} md={6} className="figures-wrapper">
      <figure
        className="articles-figure"
        aria-label={caption}
        style={{ opacity: loaded ? '1' : '0' }}
      >
        <div role="img" className="img-overlay" aria-hidden="true">
          <img
            src={img}
            className="reg img-fluid rounded d-block m-1"
            alt={title}
            onLoad={() => setLoaded(true)}
          />
          <ReachLink
            to={`/${convertToUrl(title)}`}
            className="img-link d-block rounded"
          >
            <div className="wrapper">
              <p className="title">{title}</p>
              <p className="description">{desc}</p>
            </div>
          </ReachLink>
        </div>
        <figcaption>{caption}</figcaption>
      </figure>
    </Col>
  );
};

export default ArticlesFigures;
