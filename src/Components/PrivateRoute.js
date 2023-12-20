import React,{useContext} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { AuthContext } from '../Context/AuthContext';
import Feed from './Feed';

export default function PrivateRoute() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path='/'
        element={
          user ? (
            // Render the Feed component if the user is authenticated
            <Feed />
          ) : (
            // Redirect to login if the user is not authenticated
            <Navigate to='/login' />
          )
        }
      />
    </Routes>
  );
}
