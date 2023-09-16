import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <App classname='App' />
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
);


