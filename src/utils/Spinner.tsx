import React from 'react';
import { css } from '@emotion/core';
import CircleLoader from 'react-spinners/CircleLoader';

const Spinner = ({ loaded }) => {
  const spinner = css`
    position: absolute;
    top: 35%;
    left: 45%;
  `;

  return (
    <CircleLoader size={50} color={'#22d2c8'} css={spinner} loading={!loaded} />
  );
};

export default Spinner;
