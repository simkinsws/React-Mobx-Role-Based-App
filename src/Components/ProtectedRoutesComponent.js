import React, { useEffect, useState } from 'react';
import { Route, Navigate, useSearchParams } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import authStore from '../store/authStore';

const ProtectedRoutesComponent = observer(({ children }) => {

  const isAuthenticated = authStore.isAuthenticated();
  if(!isAuthenticated) {
    return <Navigate to='/login' />;
  }
  
  return children;
});

export default ProtectedRoutesComponent;
