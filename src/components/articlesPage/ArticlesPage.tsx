import React, { useEffect, FunctionComponent } from 'react';
import { Container, Row } from 'react-bootstrap';
import { RouteComponentProps, Router } from '@reach/router';
import Fade from 'react-reveal/Fade';
import ArticlesPageFigure from './ArticlesPageFigure';
import articlesData from '../../data/ArticlesData';
import './ArticlesPage.scss';
import NumbersSection from './NumbersSection';
import { convertToUrl } from '../../utils/jsUtils';
import ArticleContainer from '../../pages/ArticleContainer';

interface IProps {
  index: number;
}

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

// adds entry-page class when route is changed in Main section
function addEntryPage() {
  const entryPage = document.querySelector('.entry-page');

  if (entryPage) {
    if (!entryPage.classList.contains('articles-page')) {
      entryPage.classList.add('articles-page');
    }
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
  const { title, img, articles, subtitle } = articlesData[index];
  const { location, distance, fly, drive } = articlesData[index].numbers;

  useEffect(() => {
    addEntryPage();
  }, []);

  const getBackgroundImg = () => `url(${img})`;

  const allArticleContainers = articlesData[
    index
  ].articles.map((article, mapIndex) => (
    <RouterPage
      path={`/${convertToUrl(articles[mapIndex].subtitle)}`}
      pageComponent={
        <ArticleContainer
          article={convertToUrl(articles[mapIndex].subtitle)}
          articlesData={articlesData[index]}
          title={title}
        />
      }
      key={article.subtitle}
    />
  ));

  return (
    <section role="article" className="articles-trips">
      <header className="articles-header">
        <Fade cascade bottom>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </Fade>
      </header>

      <Router primary={false}>
        <RouterPage
          path="/"
          pageComponent={<ArticlesPageFigures index={index} />}
        />

        {allArticleContainers}
      </Router>

      <div
        className="articles-background"
        role="img"
        style={{ backgroundImage: getBackgroundImg() }}
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
