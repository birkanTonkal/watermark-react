import React from 'react';
import ReactDOM from 'react-dom/client';
import WatermarkReact from './components/WatermarkReact';
import './index.css';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WatermarkReact width={10} height={10}  />
  </React.StrictMode>
);

