import React, { FunctionComponent, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DisqusSection from '../DisqusSection/DisqusSection';
import { convertToUrl, removeSpaces } from '../../../../utils/jsUtils';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import ArticleButton from '../../ArticlesPage/ArticleButton/ArticleButton';

import './ArticleContainer.scss';

import Londyn1 from '../../../../pages/londyn/Londyn1';
import Londyn2 from '../../../../pages/londyn/Londyn2';
import Londyn3 from '../../../../pages/londyn/Londyn3';

import Norwegia1 from '../../../../pages/norwegia/Norwegia1';
import Norwegia2 from '../../../../pages/norwegia/Norwegia2';
import Norwegia3 from '../../../../pages/norwegia/Norwegia3';
import Norwegia4 from '../../../../pages/norwegia/Norwegia4';
import Norwegia5 from '../../../../pages/norwegia/Norwegia5';
import Norwegia6 from '../../../../pages/norwegia/Norwegia6';
import Norwegia7 from '../../../../pages/norwegia/Norwegia7';
import Norwegia8 from '../../../../pages/norwegia/Norwegia8';

import CzerwoneWierchy1 from '../../../../pages/czerwoneWierchy/CzerwoneWierchy1';
import CzerwoneWierchy2 from '../../../../pages/czerwoneWierchy/CzerwoneWierchy2';

import Czechy1 from '../../../../pages/czechy/Czechy1';

interface Articles {
  subtitle: string;
  desc: string;
  img: string;
}

interface IProps {
  article: string;
  articleSubtitle: string;
  title: string;
  articlesData: Articles;
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

function subtitleToComponent(article, articlesData): FunctionComponent<IProps> {
  const subtitles = subtitlesMap(articlesData);
  const getArticle = subtitles.get(article);

  if (getArticle) {
    return getArticle;
  } else {
    return Londyn1;
  }
}

function getArrow() {
  const arrow = document.querySelector(
    '.icon-angle-right-up-wrapper'
  ) as HTMLElement;
  return arrow;
}

function showArrow() {
  const arrow = getArrow();
  arrow.classList.add('visible');
}

function hideArrow() {
  const arrow = getArrow();
  arrow.classList.remove('visible');
}

function closeMobileMenu() {
  const home = document.querySelector('#home');
  if (home) {
    home.classList.remove('nav-opened');
  }
}

const ArticleContainer: FunctionComponent<IProps> = ({
  article,
  articleSubtitle,
  title,
  articlesData,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    closeMobileMenu();
  }, []);

  useScrollPosition(({ currPos }) => {
    const minScrollPosition = -300;
    if (currPos.y <= minScrollPosition) {
      showArrow();
    } else {
      hideArrow();
    }
  });

  const ArticleComponent = subtitleToComponent(
    article,
    articlesData
  ) as FunctionComponent;

  return (
    <>
      <header className="articles-header article-header">
        <h2>{title}</h2>
        <h1>{articleSubtitle}</h1>
      </header>
      <Container className="article-container animated fadeIn">
        <Row>
          <Col>
            <div className="article-bg" role="img" aria-hidden="true">
              <ArticleComponent />

              <DisqusSection articleTitle={article} articlesTitle={title} />

              <ArticleButton />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ArticleContainer;
