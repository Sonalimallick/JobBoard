import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthHoc = ({ isPrivate, element }) => {
  const isAuthenticated = sessionStorage.getItem('authenticated')==="true";

  if (isPrivate) {
    return isAuthenticated ? element : <Navigate to="/login" />;
  } else {
    return isAuthenticated ? <Navigate to="/" /> : element;
  }
};

export default AuthHoc;
