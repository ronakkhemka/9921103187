import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importing the main component

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Rendering the main component */}
  </React.StrictMode>,
  document.getElementById('root') // Rendering into the root HTML element
);