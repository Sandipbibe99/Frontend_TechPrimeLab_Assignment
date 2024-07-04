import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';


function App() {
  return (
  
       <Router>
          <Routes>
             <Route path="/" element={<Login />}></Route>
          </Routes>
       </Router>
    
  );
}

export default App;
