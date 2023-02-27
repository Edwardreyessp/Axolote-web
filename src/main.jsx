import './index.css';
import React from 'react';
import Home from './routes/Home';
import ReactDOM from 'react-dom/client';
import { MyThemeProvider } from './hooks/Palette';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider>
      <Home />
    </MyThemeProvider>
  </React.StrictMode>
);
