import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// jsconfig.json настроен чтобы писать все импорты относительно
// папки src (например: import { App } from 'components/App')
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App className="App" />
  </React.StrictMode>
);

// SKIP_PREFLIGHT_CHECK=true -> .env файл при ошибке если что
