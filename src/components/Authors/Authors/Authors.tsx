import React, { FunctionComponent } from 'react';
import { Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import authorsData from '../../../data/AuthorsData';
import './Authors.scss';
import AuthorsFigures from '../AuthorsFigures/AuthorsFigures';
import MobileAuthorsFigures from '../MobileAuthorsFigures/MobileAuthorsFigures';

const Authors: FunctionComponent = () => {
  const allAuthors = authorsData.map((author) => (
    <AuthorsFigures {...author} key={author.fullname} />
  ));

  const allMobileAuthors = authorsData.map((author) => (
    <MobileAuthorsFigures {...author} key={author.fullname} />
  ));

  return (
    <section role="article" className="authors" id="autorzy">
      <header id="header-click">
        <Fade cascade bottom>
          <h2>Autorzy</h2>
        </Fade>
        <Fade bottom>
          <h3>Dowiedz się o nas więcej</h3>
        </Fade>
      </header>

      <Container className="container-wrapper-authors">
        <Row className="justify-content-center">
          {allAuthors}
          {allMobileAuthors}
        </Row>
      </Container>

      <div role="img" className="img-bg-authors-overlay" aria-hidden="true" />
    </section>
  );
};

export default Authors;
