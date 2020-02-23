import React from 'react';
import { render } from '@testing-library/react';
import TripsList from './TripsList';
import { articlesData } from '../../data/ArticlesData';

it('renders without crashing', () => {
  const { unmount } = render(<TripsList />);
  unmount();
});

it('renders list with proper number of elements', () => {
  const { container } = render(<TripsList />);
  const tripsList = container.querySelector('ul');
  const tripsListLength = tripsList.getElementsByTagName('a').length;
  const articlesNumber = articlesData.length;

  expect(tripsListLength).toEqual(articlesNumber);
});
