import React from 'react';
import { useAuth } from './context/AuthContext';
import './ProtectedComponent.css';

const ProtectedComponent = ({ children, fallback }) => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="protected-wrapper">
        {/* <div className="overlay">
          <div className="overlay-content">
            {fallback ? fallback : <p>You need to be logged in to perform this action.</p>}
          </div>
        </div> */}
        {children}
      </div>
    );
  }

  return <div className="protected-wrapper">{children}</div>;
};

export default ProtectedComponent;
