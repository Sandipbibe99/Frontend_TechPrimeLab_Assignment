import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Fallback from './components/Fallback';
import { ProjectProvider } from './context/ProjectContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Fallback />}>
     <ProjectProvider>
          <App />
        </ProjectProvider>
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
