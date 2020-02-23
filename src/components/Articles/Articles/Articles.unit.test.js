import React from 'react';
import { render } from '@testing-library/react';
import Articles from './Articles';
import { articlesData } from '../../../data/ArticlesData';

it('renders without crashing', () => {
  const { unmount } = render(<Articles />);
  unmount();
});

it('renders list with proper number of elements', () => {
  const { container } = render(<Articles />);
  const renderedArticles = container.getElementsByTagName('figure');
  const renderedArticlesNumber = renderedArticles.length;
  const articlesNumber = articlesData.length;

  expect(renderedArticlesNumber).toEqual(articlesNumber);
});
