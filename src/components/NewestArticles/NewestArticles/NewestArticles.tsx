import React, { FunctionComponent } from 'react';
import { Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import articlesData from '../../../data/ArticlesData';
import './NewestArticles.scss';
import NewestArticlesFigures from '../NewestArticlesFigures/NewestArticlesFigures';
import MobileNewestArticlesFigures from '../MobileNewestArticlesFigures/MobileNewestArticlesFigures';

const NewestArticles: FunctionComponent = () => {
  const allNewestArticles = articlesData[0].articles.map((newestArticle) => {
    return (
      <NewestArticlesFigures
        title={articlesData[0].title}
        subtitle={newestArticle.subtitle}
        desc={newestArticle.desc}
        img={newestArticle.img}
        key={newestArticle.subtitle}
      />
    );
  });

  const allMobileNewestArticles = articlesData[0].articles.map(
    (newestArticle) => (
      <MobileNewestArticlesFigures
        title={articlesData[0].title}
        subtitle={newestArticle.subtitle}
        img={newestArticle.img}
        key={newestArticle.subtitle}
      />
    )
  );

  return (
    <section role="article" className="newest-articles" id="najnowsze-artykuly">
      <header>
        <Fade bottom>
          <h2>Najnowsze artykuły</h2>
          <h3>Zajrzyj aby dowiedzieć się więcej o wybranym miejscu</h3>
        </Fade>
      </header>

      <Container className="container-wrapper">
        <Row className="justify-content-center">{allNewestArticles}</Row>

        {allMobileNewestArticles}
      </Container>

      <div role="img" className="img-article-overlay" aria-hidden="true" />
    </section>
  );
};

export default NewestArticles;
