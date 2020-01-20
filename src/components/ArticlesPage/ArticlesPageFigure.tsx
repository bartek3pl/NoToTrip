import React, { useState, useEffect, FunctionComponent } from 'react';
import { Col } from 'react-bootstrap';
import { Link as ReachLink } from '@reach/router';
import { convertToUrl } from '../../utils/jsUtils';
import { css } from '@emotion/core';
import CircleLoader from 'react-spinners/CircleLoader';
import './ArticlesPageFigure.scss';

interface IProps {
  title: string;
  subtitle: string;
  caption: string;
  img: string;
}

function closeMobileMenu(): void {
  const home = document.querySelector('#home');
  if (home) {
    home.classList.remove('nav-opened');
  }
}

const ArticlesPageFigure: FunctionComponent<IProps> = ({
  title,
  subtitle,
  caption,
  img,
}) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {}, [loaded]);

  const spinner = css`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
  `;

  return (
    <Col xl={4} lg={6} className="articles-page-column">
      <CircleLoader
        size={50}
        color={'#22d2c8'}
        css={spinner}
        loading={!loaded}
      />

      <figure
        className="figures-wrapper"
        aria-label={caption}
        style={{ opacity: loaded ? '1' : '0' }}
      >
        <div
          role="img"
          className="img-overlay"
          aria-hidden="true"
          onClick={(): void => closeMobileMenu()}
        >
          <img
            src={img}
            className="reg img-fluid rounded d-block m-1"
            alt={`${title} ${caption}`}
            onLoad={() => setLoaded(true)}
          />
          <ReachLink
            to={`/${convertToUrl(title)}/${convertToUrl(subtitle)}`}
            className="img-link d-block rounded"
          >
            <div className="wrapper">
              <p className="title">{title}</p>
              <p className="description">{subtitle}</p>
            </div>
          </ReachLink>
        </div>
        <figcaption>{caption}</figcaption>
      </figure>
    </Col>
  );
};

export default ArticlesPageFigure;
