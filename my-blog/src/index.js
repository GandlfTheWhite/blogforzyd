import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//将js代码根据id渲染到index.html页面上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
