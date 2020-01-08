import React, { FunctionComponent } from 'react';
import { Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import articlesData from '../../data/ArticlesData';
import './Articles.scss';
import ArticlesFigures from './ArticlesFigures';

const Articles: FunctionComponent = () => {
  const allArticles = articlesData.map((article) => (
    <ArticlesFigures {...article} key={article.title} />
  ));

  return (
    <section role="article" className="trips">
      <header id="podroze">
        <Fade bottom cascade>
          <h2>Podróże</h2>
        </Fade>
        <Fade bottom>
          <p>„Ten kto żyje widzi dużo, ten kto podróżuje widzi więcej.”</p>
        </Fade>
      </header>

      <Container className="container-wrapper">
        <Fade bottom delay={200}>
          <Row>{allArticles}</Row>
        </Fade>
      </Container>

      <div role="img" aria-hidden="true" className="img-trips-overlay"></div>
    </section>
  );
};

export default Articles;
