import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/global.css';
import { ClosetProvider } from './context/ClosetContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ClosetProvider>
      <App />
    </ClosetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
