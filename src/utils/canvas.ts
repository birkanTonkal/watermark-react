import { WatermarkCanvas, WatermarkText } from "../types/props";

const DEFAULT_TEXT_VALUES = {
  content:'',
  font:'bold 20px calibri',
  color:'#ff0000',
  dx:40,
  dy:40
}


export function addTextWatermark(canvas:HTMLCanvasElement,canvasOpts:WatermarkCanvas, text:WatermarkText) {
    const context = canvas.getContext('2d');

    if (context !== null) {
      let image = new Image();

      image.onload = function () {
      setCanvasSize(canvas,canvasOpts);

      // cover image to canvas size which specified by user
      context.drawImage(image, 0, 0, image.width,image.height,0, 0, canvas.width, canvas.height);  

      addTextOnCanvas(context,text)
      }
    image.src = canvasOpts.baseImage;
    
    }
    
}

function addTextOnCanvas(context:CanvasRenderingContext2D, text:WatermarkText) {
  context.font = text.font ?? 'bold 20px calibri';
  context.fillStyle = text.color ?? DEFAULT_TEXT_VALUES.color;
  context.fillText(text.content, text.dx ?? DEFAULT_TEXT_VALUES.dx, text.dy ?? DEFAULT_TEXT_VALUES.dy);
}

function setCanvasSize(canvas:HTMLCanvasElement,canvasOpts:WatermarkCanvas ) {
  canvas.width = canvasOpts.width;
  canvas.height = canvasOpts.height;
}