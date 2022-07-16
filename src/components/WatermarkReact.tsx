import { useEffect, useRef } from 'react';
import { addImageWatermark, addTextWatermark } from '../utils/watermark';
import { WatermarkProps } from '../types/props';

function WatermarkReact({ canvasOpts, text, logo }: WatermarkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas == null) return;
    if (text !== undefined) { addTextWatermark(canvas, canvasOpts, text); }
    if (logo !== undefined) {addImageWatermark(canvas, canvasOpts, logo)}
  }, []);

  return (
    <>
      {text !== undefined && logo !== undefined
        ? console.warn("You can't use text and logo props at the same time (WatermarkReact)") : <canvas ref={canvasRef} />}
    </>
  );
}

export default WatermarkReact;
