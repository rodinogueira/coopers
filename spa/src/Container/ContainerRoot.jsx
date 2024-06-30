import React from 'react';

export const ContainerRoot = ({ children, borderColor, ...rest }) => {
  const childrenWithProps = React.Children.map(children, child => 
    React.cloneElement(child, rest)
  );

  return (
    <div className='container' style={{ borderTop: `5px solid ${borderColor}` }}>
      {childrenWithProps}
    </div>
  );
};
