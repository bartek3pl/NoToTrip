import React from 'react';
import { render } from '@testing-library/react';
import ArticlesPage from './ArticlesPage';
import { articlesData } from '../../../data/ArticlesData';

it('renders without crashing', () => {
  const testIndex = 0;
  const { unmount } = render(<ArticlesPage index={testIndex} />);
  unmount();
});

it('renders list with proper number of elements', () => {
  const testIndex = 1;
  const { container } = render(<ArticlesPage index={testIndex} />);
  const renderedArticles = container.getElementsByTagName('figure');
  const renderedArticlesNumber = renderedArticles.length;
  const articlesNumber = articlesData[testIndex].articles.length;

  expect(renderedArticlesNumber).toEqual(articlesNumber);
});
