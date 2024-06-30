import React from 'react';
import './styles.css';

export const ContainerSubTitle = ({ children, className, ...rest }) => (
  <h3 className={className} {...rest}>{children}</h3>
);