import React from 'react';
import ReactDOM from 'react-dom/client';
import WatermarkReact from './components/WatermarkReact';
import firstImage from './assets/picture.jpg'
import secondImage from './assets/picture2.jpg'
import './index.css';
import {WatermarkProps} from './types/props';


const mockProp:WatermarkProps = {canvasOpts:{width:600, height:600,baseImage:firstImage}, text:{content:"asdasdasd",font:"bold 30px Calibri",color:"#ff0000",dx:30, dy:30}}
const mockProp2:WatermarkProps = {canvasOpts:{width:30, height:50,baseImage:secondImage}}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WatermarkReact {...mockProp}  />
    <WatermarkReact {...mockProp2}  />
  </React.StrictMode>
);

