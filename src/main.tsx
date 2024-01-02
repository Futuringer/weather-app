import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages/collection/page';
import './common/styles/index.scss';

const container = document.querySelector('#root') as HTMLElement;

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
