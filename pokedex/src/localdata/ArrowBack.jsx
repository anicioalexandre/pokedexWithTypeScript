import React from 'react';

const ArrowBack = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="50"
    viewBox="0 0 24 24"
    width="50"
    fill={props.fill}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
  </svg>
);

export default ArrowBack;