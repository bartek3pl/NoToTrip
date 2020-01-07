import React, { FunctionComponent } from 'react';
import { Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import articlesData from '../../data/ArticlesData';
import './NewestArticles.scss';
import NewestArticlesFigures from './NewestArticlesFigures';
import MobileNewestArticlesFigures from './MobileNewestArticlesFigures';

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
          <p>Zajrzyj aby dowiedzieć się więcej o wybranym miejscu</p>
        </Fade>
      </header>

      <Container className="container-wrapper">
        <Row className="justify-content-center">{allNewestArticles}</Row>

        {allMobileNewestArticles}
      </Container>

      <div role="img" className="img-article-overlay" aria-hidden="true"></div>
    </section>
  );
};

export default NewestArticles;
