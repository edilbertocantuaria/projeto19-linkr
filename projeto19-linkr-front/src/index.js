import React from 'react';
import ReactDOM from 'react-dom/client';
import ResetStyle from './style/ResetStyle';
//import GlobalStyle from './style/GlobalStyle';
import GlobalFonts from './style/FontStyle.js';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyle/>
    <GlobalFonts/>
   
    <App />
  </React.StrictMode>
);

