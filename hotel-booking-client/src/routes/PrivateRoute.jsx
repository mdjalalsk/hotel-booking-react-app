// import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
   const{isLoading,user}=useAuth();
      
  if (isLoading) {
    return <div className="progress w-full text-center"></div>;
  }

  if (!isLoading && !user?.email) {
    return <Navigate to="/login" />;
  }

  return children;
    
};

export default PrivateRoute;
