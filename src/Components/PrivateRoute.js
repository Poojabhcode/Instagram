import React,{useContext} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { AuthContext } from '../Context/AuthContext';
import Feed from './Feed';
import Profile from './Profile';

export default function PrivateRoute() {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Redirect to login if the user is not authenticated
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route exact path="/profile/:id" element={<Profile user={user} />} />
    </Routes>
  );
}