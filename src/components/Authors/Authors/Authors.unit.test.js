import React from 'react';
import { render } from '@testing-library/react';
import Authors from './Authors';
import authorsData from '../../../data/AuthorsData';

it('renders without crashing', () => {
  const { unmount } = render(<Authors />);
  unmount();
});

it('renders list with proper number of elements on desktop', () => {
  const { container } = render(<Authors />);
  const renderedAuthors = container.getElementsByClassName('authors-block');
  const renderedAuthorsNumber = renderedAuthors.length;
  const authorsNumber = authorsData.length;

  expect(renderedAuthorsNumber).toEqual(authorsNumber);
});

it('renders list with proper number of elements on mobile', () => {
  const { container } = render(<Authors />);
  const renderedAuthors = container.getElementsByClassName(
    'img-authors-mobile'
  );
  const renderedAuthorsNumber = renderedAuthors.length;
  const authorsNumber = authorsData.length;

  expect(renderedAuthorsNumber).toEqual(authorsNumber);
});
