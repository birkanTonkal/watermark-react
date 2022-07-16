import React from 'react';
import ReactDOM from 'react-dom/client';
import WatermarkReact from './components/WatermarkReact';
import firstImage from './assets/picture.jpg';
import secondImage from './assets/picture2.jpg';
import './index.css';
import { WatermarkProps } from './types/props';

const mockProp:WatermarkProps = {
  canvasOpts: { width: 1000, height: 600, baseImage: firstImage },
  text: {
    content: 'Hi am using whatsapp', font: 'bold 30px Calibri', color: 'rgba(255,0,0,0.5)', dx: 30, dy: 30,
  },
};
const mockProp2:WatermarkProps = { canvasOpts: { width: 700, height: 700, baseImage: firstImage }, logo: {watermarkImage:secondImage, opacity:0.5} };

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <WatermarkReact {...mockProp} />
    <WatermarkReact {...mockProp2} />
  </React.StrictMode>,
);
