import React from 'react';
import ReactDOM from 'react-dom/client';
import WatermarkReact from './components/WatermarkReact';
import './index.css';
import { WatermarkSource, WatermarkPosition } from './types/props';


const mockProp:WatermarkSource & WatermarkPosition = {dx:10, dy:10}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WatermarkReact {...mockProp}  />
  </React.StrictMode>
);

