import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { lazy, } from 'react';

const Login = lazy(() => import("./pages/login/Login"))
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
