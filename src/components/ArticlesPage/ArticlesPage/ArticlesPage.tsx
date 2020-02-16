import React, { useEffect, FunctionComponent } from 'react';
import { Container, Row } from 'react-bootstrap';
import { RouteComponentProps, Router } from '@reach/router';
import Fade from 'react-reveal/Fade';
import ArticlesPageFigure from '../ArticlesPageFigure/ArticlesPageFigure';
import { articlesData } from '../../../data/ArticlesData';
import './ArticlesPage.scss';
import NumbersSection from '../NumbersSection/NumbersSection';
import { convertToUrl } from '../../../utils/jsUtils';
import ArticleContainer from '../ArticlesContainer/ArticlesContainer/ArticleContainer';

interface IProps {
  index: number;
}

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

// adds entry-page class when route is changed in Main section
function addArticlesPage() {
  const entryPage = document.querySelector('.entry-page');

  if (entryPage && !entryPage.classList.contains('articles-page')) {
    entryPage.classList.add('articles-page');
  }
}

// changes display of main page when route is changed in Main section
function removeEntryContent() {
  const entryContent = document.querySelector('.entry-content') as HTMLElement;

  if (entryContent && entryContent.style.display !== 'none') {
    entryContent.style.display = 'none';
  }
}

const ArticlesPageFigures: FunctionComponent<IProps> = ({ index }) => {
  const { articles, title } = articlesData[index];
  let allArticlesPageFigures;

  if (articles) {
    allArticlesPageFigures = articles.map((article) => (
      <ArticlesPageFigure {...article} title={title} key={article.subtitle} />
    ));
  }

  return (
    <Container className="container-wrapper">
      <Fade bottom>
        <Row>{allArticlesPageFigures}</Row>
      </Fade>
    </Container>
  );
};

const ArticlesPage: FunctionComponent<IProps> = ({ index }) => {
  const { title, backgroundImg, articles, subtitle } = articlesData[index];
  const { location, distance, fly, drive } = articlesData[index].numbers;

  useEffect(() => {
    window.scrollTo(0, 0);
    removeEntryContent();
    addArticlesPage();
    showLayer();
  }, []);

  const getEntryPageSection = () =>
    document.querySelector('.entry-page') as HTMLElement;

  const showLayer = () => {
    const entryPage = getEntryPageSection();
    entryPage.style.zIndex = '1';
  };

  const getBackgroundImage = () => `url(${backgroundImg})`;

  const allArticleContainers = articlesData[
    index
  ].articles.map((article, mapIndex) => (
    <RouterPage
      path={`/${convertToUrl(articles[mapIndex].subtitle)}`}
      pageComponent={
        <ArticleContainer
          article={convertToUrl(articles[mapIndex].subtitle)}
          articleSubtitle={articles[mapIndex].subtitle}
          articlesData={articlesData[index]}
          title={title}
        />
      }
      key={article.subtitle}
    />
  ));

  const backgroundImage = getBackgroundImage();

  return (
    <section role="article" className="articles-trips">
      <Router primary={false}>
        <RouterPage
          default
          path="/"
          pageComponent={
            <>
              <header className="articles-header">
                <Fade bottom>
                  <h1>{title}</h1>
                  <h2>{subtitle}</h2>
                </Fade>
              </header>
              <ArticlesPageFigures index={index} />
            </>
          }
        />

        {allArticleContainers}
      </Router>

      <div
        className="articles-background"
        role="img"
        style={{ backgroundImage: backgroundImage }}
      />

      <NumbersSection
        location={location}
        distance={distance}
        fly={fly}
        drive={drive}
      />

      <div className="img-trips-overlay" role="img" aria-hidden="true" />
    </section>
  );
};

export default ArticlesPage;
