import './App.css';
import React from 'react';
import Signup from './Components/Signup';
import Login from './Components/Login'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import PrivateRoute from './Components/PrivateRoute';
import ForgetPass from './Components/ForgetPass'
import ErrorBoundary from './Components/ErrorBoundary';

function App() {
  return (
    <Router>
      <ErrorBoundary>
      <AuthProvider>
      <Routes>
     
       
          <Route path='/signup' element={<Signup />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/forgetpass' element={<ForgetPass/>}/>
          <Route path='/*' element={<PrivateRoute />} />
         
        </Routes>
        </AuthProvider>
        </ErrorBoundary>
    </Router>
    
      
  );
}

export default App;
