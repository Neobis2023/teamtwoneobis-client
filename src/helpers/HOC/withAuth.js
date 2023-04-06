import React, { useEffect, useState } from 'react'

const withAuth = (Component) => (props) => {
  const isAuthenticated = JSON.parse(localStorage.getItem('user'));
  if (isAuthenticated) {
    return <Component {...props} />;
  }
  return (
    <h1>You are not authorized</h1>
  );
};

export default withAuth;