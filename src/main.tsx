import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Tenshi Kawaii Pure White Theme:
if (typeof window !== 'undefined') {
  document.documentElement.classList.remove('dark');
  localStorage.removeItem('theme');
  localStorage.removeItem('theme_tenshi_mode');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
