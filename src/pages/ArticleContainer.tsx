import React, { FunctionComponent, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import DisqusSection from './DisqusSection';
import { convertToUrl, removeSpaces } from '../utils/jsUtils';

import './ArticleContainer.scss';

import Londyn1 from './londyn/Londyn1';
import Londyn2 from './londyn/Londyn2';
import Londyn3 from './londyn/Londyn3';

import Norwegia1 from './norwegia/Norwegia1';
import Norwegia2 from './norwegia/Norwegia2';
import Norwegia3 from './norwegia/Norwegia3';
import Norwegia4 from './norwegia/Norwegia4';
import Norwegia5 from './norwegia/Norwegia5';
import Norwegia6 from './norwegia/Norwegia6';
import Norwegia7 from './norwegia/Norwegia7';
import Norwegia8 from './norwegia/Norwegia8';

import CzerwoneWierchy1 from './czerwoneWierchy/CzerwoneWierchy1';
import CzerwoneWierchy2 from './czerwoneWierchy/CzerwoneWierchy2';

import Czechy1 from './czechy/Czechy1';

interface IProps {
  article: string;
  title: string;
  articlesData: any;
}

const componentsMap = {
  Londyn1,
  Londyn2,
  Londyn3,
  Norwegia1,
  Norwegia2,
  Norwegia3,
  Norwegia4,
  Norwegia5,
  Norwegia6,
  Norwegia7,
  Norwegia8,
  CzerwoneWierchy1,
  CzerwoneWierchy2,
  Czechy1,
};

function subtitlesMap(articlesData): Map<string, FunctionComponent> {
  const subtitlesMap = new Map();
  let i = 1;

  for (const article of articlesData.articles) {
    const articleComponentName = `${removeSpaces(articlesData.title)}${i}`;
    subtitlesMap.set(
      convertToUrl(article.subtitle),
      componentsMap[articleComponentName]
    );
    i += 1;
  }

  return subtitlesMap;
}

function subtitleToComponent(
  article: string,
  articlesData: any
): FunctionComponent {
  const subtitles = subtitlesMap(articlesData);
  const getArticle = subtitles.get(article);

  if (getArticle) {
    return getArticle;
  } else {
    return Londyn1;
  }
}

/*
function getArrow() {
  const arrow = document.querySelector('.up') as HTMLElement;
  return arrow;
}

function showArrow() {
  const arrow = getArrow();
  arrow.style.opacity = '1';
}

function hideArrow() {
  const arrow = getArrow();
  arrow.style.opacity = '0';
}
*/

const ArticleContainer: FunctionComponent<IProps> = ({
  article,
  title,
  articlesData,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ArticleComponent = subtitleToComponent(
    article,
    articlesData
  ) as FunctionComponent;

  return (
    <Container className="article-container animated fadeIn">
      <Row>
        <Col>
          <div className="article-bg" id="top" role="img" aria-hidden="true">
            <Link
              to="top"
              smooth={true}
              spy={true}
              className="show-icon"
              aria-label="Przejdź do początku artykułu"
            >
              <i className="icon-angle-right up" />
            </Link>

            <ArticleComponent />

            <DisqusSection articleTitle={article} articlesTitle={title} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleContainer;
