import React from 'react';
import { Navigate, useParams } from "react-router-dom";
import { observer } from 'mobx-react-lite';
import authStore from '../store/authStore';

const ProtectedProfle = observer(({ children }) => {
  let { userName } = useParams();
  const isAuthenticated = authStore.isAuthenticated();
  if(isAuthenticated && userName !== authStore.name) {
    return <Navigate to={`/profile/${authStore.name}`} />;
  } else if(!isAuthenticated) {
    return <Navigate to={`/login`} />;
  }

  return children;
});

export default ProtectedProfle;