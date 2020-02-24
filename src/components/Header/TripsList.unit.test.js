import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

it('calls handleMobileMenu when tripsList element is clicked', () => {
  const handleMobileMenu = jest.fn();
  const { container } = render(
    <TripsList handleMobileMenu={handleMobileMenu} />
  );
  const tripsList = container.querySelector('ul');
  const tripsListElement = tripsList.firstElementChild;

  const leftClick = { button: 0 };
  fireEvent.click(tripsListElement, leftClick);

  expect(handleMobileMenu).toHaveBeenCalled();
  expect(handleMobileMenu).toHaveBeenCalledTimes(1);
});
