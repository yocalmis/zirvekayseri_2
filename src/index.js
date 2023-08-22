import React from 'react';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; // Doğru import
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
