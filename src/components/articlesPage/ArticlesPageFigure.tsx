import React, { useState, useEffect, FunctionComponent } from 'react';
import { Col } from 'react-bootstrap';
import { Link as ReachLink } from '@reach/router';
import { convertToUrl } from '../../utils/jsUtils';
import ClipLoader from 'react-spinners/ClipLoader';
import './ArticlesPageFigure.scss';

interface IProps {
  title: string;
  subtitle: string;
  caption: string;
  img: string;
}

const ArticlesPageFigure: FunctionComponent<IProps> = ({
  title,
  subtitle,
  caption,
  img,
}) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {}, [loaded]);

  return (
    <Col xl={4} lg={6}>
      {!loaded ? (
        <ClipLoader size={500} color={'#fff'} loading={!loaded} />
      ) : null}
      <figure
        className="figures-wrapper"
        aria-label={caption}
        style={{ opacity: loaded ? '1' : '0' }}
      >
        <div role="img" className="img-overlay" aria-hidden="true">
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
