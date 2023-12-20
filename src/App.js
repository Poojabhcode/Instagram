import './App.css';
import React from 'react';
import Signup from './Components/Signup';
import Login from './Components/Login'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path='/*' element={<PrivateRoute />} />
          <Route path='/signup' element={<Signup />}/>
          <Route path='/login' element={<Login />} />
        </Routes>
        </AuthProvider>
    </Router>
    
      
  );
}

export default App;
