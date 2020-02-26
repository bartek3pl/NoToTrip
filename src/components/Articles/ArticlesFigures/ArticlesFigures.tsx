import React, { FunctionComponent, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { Link as ReachLink } from '@reach/router';
import { convertToUrl } from '../../../utils/jsUtils';
import Spinner from '../../../utils/Spinner';
import './ArticlesFigures.scss';

interface IProps {
  title: string;
  desc: string;
  img: string;
  subtitle: string;
}

function closeMobileMenu() {
  const home = document.querySelector('#home');
  if (home) {
    home.classList.remove('nav-opened');
  }
}

const ArticlesFigures: FunctionComponent<IProps> = ({
  title,
  desc,
  img,
  subtitle,
}) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {}, [loaded]);

  return (
    <Col lg={4} md={6} className="figures-wrapper">
      <Spinner loaded={loaded} />

      <figure
        className="articles-figure"
        aria-label={subtitle}
        style={{ opacity: loaded ? '1' : '0' }}
      >
        <div
          role="img"
          className="img-overlay"
          aria-hidden="true"
          onClick={() => closeMobileMenu()}
        >
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
        <figcaption className="trips-figcaption">{subtitle}</figcaption>
      </figure>
    </Col>
  );
};

export default ArticlesFigures;
