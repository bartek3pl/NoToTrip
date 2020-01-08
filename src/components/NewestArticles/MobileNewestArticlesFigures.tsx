import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link as ReachLink } from '@reach/router';
import { convertToUrl } from '../../utils/jsUtils';
import './MobileNewestArticlesFigures.scss';

interface IProps {
  title: string;
  subtitle: string;
  img: string;
}

const MobileNewestArticlesFigures: FunctionComponent<IProps> = ({
  title,
  subtitle,
  img,
}) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {}, [loaded]);

  return (
    <figure
      className="newest-articles-figure"
      aria-label={subtitle}
      style={{ opacity: loaded ? '1' : '0' }}
    >
      <div role="img" className="img-overlay-mobile" aria-hidden="true">
        <ReachLink
          to={`/${convertToUrl(title)}/${convertToUrl(subtitle)}`}
          aria-label={`Przejdź do artykułu ${title}`}
        >
          <img
            src={img}
            className="img-article-mobile rounded"
            alt={title}
            onLoad={(): void => setLoaded(true)}
          />
        </ReachLink>
      </div>
      <figcaption className="fig-mobile">{subtitle}</figcaption>
    </figure>
  );
};

export default MobileNewestArticlesFigures;
