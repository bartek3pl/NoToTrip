import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../../App/App';
import ArticlesFigures from './ArticlesFigures';

it('calls handleMobileMenu when figure element is clicked', () => {
  const appComponent = render(<App />);

  const articleFigureComponent = render(
    <ArticlesFigures title={''} desc={''} img={''} subtitle={''} />
  );
  const articleFigure = articleFigureComponent.container.querySelector(
    'figure div'
  );

  const home = appComponent.container.querySelector('#home');
  const homeClasses = home.classList;
  homeClasses.add('nav-opened');

  const leftClick = { button: 0 };
  fireEvent.click(articleFigure, leftClick);

  expect(homeClasses).not.toContain('nav-opened');
});
