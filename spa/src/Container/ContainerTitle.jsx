import React from 'react';
import './styles.css';

export const ContainerTitle = ({ children, ...rest }) => (
  <h2 className='container__title' {...rest}>{children}</h2>
);
