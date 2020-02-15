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
  caption: string;
  desc: string;
  img: string;
}

interface Numbers {
  location: string;
  distance: string;
  fly: string;
  drive: string;
}

interface ArticlesData {
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  caption: string;
  articles: any;
  numbers: Numbers;
}

interface IProps {
  article: string;
  articleSubtitle: string;
  title: string;
  articlesData: ArticlesData;
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

const articlesLinks = {
  londyn: {
    londyn1: '/londyn/co-warto-zobaczyc-w-londynie-pierwszego-dnia',
    londyn2: '/londyn/calodniowy-spacer-wzdluz-tamizy',
    londyn3:
      '/londyn/peron-9-i-3/4-sherlock-holmes-i-greenwich-na-poludniku-zerowym',
  },
  norwegia: {
    kjeragbolten:
      '/norwegia/masz-lek-wysokosci-lepiej-nie-wchodz-na-kjeragbolten',
    preikestolen:
      '/norwegia/preikestolen-najslynniejsza-polka-skalna-w-norwegii',
    jotunheimen:
      '/norwegia/mrozny-dom-gigantow-jotunheimen-i-kraina-hobbitow-hardangervidda',
    trolltunga: '/norwegia/trolltunga-spotkanie-z-trollem',
    jostedalsbreen:
      '/norwegia/lodowa-kraina-jostedalsbreen-i-jego-ramie-briksdalsbreen',
    geirangerfjord:
      '/norwegia/sredniowieczne-farmy-skagefla-i-kreta-droga-trolli',
    aurland:
      '/norwegia/urocze-portowe-miasteczka-nad-sognefjordem-aurland-laerdal-i-flam',
    wyjazd:
      '/norwegia/ile-zaplacilismy-za-wyjazd-do-norwegii-jak-dojechac-co-ze-soba-spakowac',
  },
  czerwoneWierchy: {
    zakopane: '/czerwone-wierchy/zakopane-spacer-przez-krupowki',
    czerwoneWierchy:
      '/czerwone-wierchy/czerwone-wierchy-czyli-jesienia-przez-tatrzanskie-grzbiety',
  },
  czechy: {
    harrachov: '/czechy/harrachov-benecko-i-herlikovice-na-ferie-zimowe',
  },
};

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
