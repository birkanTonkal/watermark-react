import React from 'react'
import ReactDOM from 'react-dom/client'
import WatermarkReact from './components/WatermarkReact'
import firstImage from './assets/picture.jpg'
import secondImage from './assets/picture2.jpg'
import logo from './assets/swords.png'
import './index.css'
import { WatermarkProps } from './types/props'

const mockProp: WatermarkProps = {
    canvasOpts: { width: 1000, height: 600, baseImage: firstImage },
    text: [
        {
            content: 'Hi am using whatsapp',
            font: 'bold 30px Calibri',
            color: 'rgba(255,0,0,0.5)',
            dx: 30,
            dy: 30,
        },
        {
            content: 'Hi am usinsadsadasdg whatsapp',
            font: 'bold 30px Calibri',
            color: 'rgba(255,50,0,1)',
            dx: 300,
            dy: 60,
        },
    ],
}
const mockProp2: WatermarkProps = {
    canvasOpts: { width: 1000, height: 600, baseImage: firstImage },
    logo: { watermarkImage: logo, opacity: 0.8, dx:800, dy:100, dwidth:150, dheight:150 },
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <WatermarkReact {...mockProp} />
        <WatermarkReact {...mockProp2} />
    </React.StrictMode>,
)
