import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './hooks/useAuth';
import App from './components/App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


