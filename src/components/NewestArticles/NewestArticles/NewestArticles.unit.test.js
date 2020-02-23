import React from 'react';
import { render } from '@testing-library/react';
import NewestArticles from './NewestArticles';

it('renders without crashing', () => {
  const { unmount } = render(<NewestArticles />);
  unmount();
});

it('renders list with proper number of elements on desktop', () => {
  const { container } = render(<NewestArticles />);
  const articles = container.getElementsByClassName('article');
  const articlesNumber = articles.length;
  expect(articlesNumber).toEqual(3);
});

it('renders list with proper number of elements on mobile', () => {
  const { container } = render(<NewestArticles />);
  const articles = container.getElementsByClassName('newest-articles-figure');
  const articlesNumber = articles.length;
  expect(articlesNumber).toEqual(3);
});
