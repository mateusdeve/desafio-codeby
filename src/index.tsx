import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import { GlobalProvider } from './Context/GlobalContext';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);