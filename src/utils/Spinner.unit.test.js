import React from 'react';
import { render } from '@testing-library/react';
import Spinner from './Spinner';

it('renders without crashing', () => {
  const { unmount } = render(<Spinner />);
  unmount();
});
