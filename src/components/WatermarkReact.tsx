import { addTextWatermark } from "../utils/canvas";
import { WatermarkProps } from "../types/props";
import { useEffect, useRef } from "react";

const WatermarkReact = ({ canvasOpts, text, logo }: WatermarkProps) => {
 
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas == null) {
      return;
    }
    
    if (text !== undefined) {addTextWatermark(canvas,canvasOpts,text)}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {text !== undefined && logo !== undefined ? 
      console.warn("You can't use text and logo props at the same time (WatermarkReact)") : <canvas ref={canvasRef} />}
    </>
  );
}

export default WatermarkReact