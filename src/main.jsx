import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { register } from 'service-worker';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
       <App />
  </React.StrictMode>
);

register();