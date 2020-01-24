import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link as ReachLink } from '@reach/router';
import { Col } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import { convertToUrl } from '../../../utils/jsUtils';
import './NewestArticlesFigures.scss';

interface IProps {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
}

const NewestArticlesFigures: FunctionComponent<IProps> = ({
  title,
  subtitle,
  desc,
  img,
}) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {}, [loaded]);

  return (
    <Col xl={8} lg={10} md={12}>
      <Zoom bottom delay={100}>
        <ReachLink
          to={`/${title.toLowerCase()}/${convertToUrl(subtitle)}`}
          aria-label={`Przejdź do artykułu ${title}`}
        >
          <div className="article">
            <div
              className="img-article-animate"
              style={{ opacity: loaded ? '1' : '0' }}
            >
              <img
                src={img}
                className="img-article"
                alt={title}
                onLoad={() => setLoaded(true)}
              />
            </div>
            <p>
              <span className="article-header">
                {title} - {subtitle} -{' '}
              </span>
              {desc}
            </p>
          </div>
        </ReachLink>
      </Zoom>
    </Col>
  );
};

export default NewestArticlesFigures;
