import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { lazy, } from 'react';

const lazyWithTime = (importFunction , timeout) => 
   
   new Promise (resolve=> {
        setTimeout(() => {
          resolve(importFunction())
        }, timeout);
   })



const Login = lazy(() => lazyWithTime(() => import('./pages/login/Login'), 2000));
const Addproject = lazy(() => import("./pages/add-project/Addproject"))
const Projectlist = lazy(() => import("./pages/project-list/Projectlist"))
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"))

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-project" element={<Addproject />} />
        <Route path="/project-listing" element={<Projectlist />} />
      </Routes>
    </Router>
  );
}

export default App;
