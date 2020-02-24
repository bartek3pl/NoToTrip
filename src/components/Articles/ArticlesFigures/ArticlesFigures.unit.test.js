import React from 'react';
import { render } from '@testing-library/react';
import ArticlesFigures from './ArticlesFigures';

it('renders without crashing', () => {
  const { unmount } = render(
    <ArticlesFigures title={''} desc={''} img={''} subtitle={''} />
  );
  unmount();
});
