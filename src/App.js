import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login'
import { BrowserRouter as Router,Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <Router> 
        <Routes>
                <Route path='/Signup' element={<Signup/>} exact/>
                <Route path='/Login' element={<Login />} />      
        </Routes>
    </Router>
  );
}

export default App;
