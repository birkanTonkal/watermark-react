import { WatermarkCanvas, WatermarkImage, WatermarkText } from '../types/props';

const DEFAULT_TEXT_VALUES = {
  font: 'bold 20px calibri',
  color: 'rgba(255,0,0,0.5)',
  dx: 40,
  dy: 40,
};

const DEFAULT_LOGO_VALUES = {
  opacity :1
}

export async function addTextWatermark(canvas: HTMLCanvasElement, canvasOpts: WatermarkCanvas, text: WatermarkText) {
  const context = canvas.getContext('2d');

  if (context === null) {return}

  setCanvasSize(canvas, canvasOpts);
  const image = await loadImage(canvasOpts.baseImage)
  context.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
  addTextOnCanvas(context, text);
}

export async function addImageWatermark(canvas: HTMLCanvasElement, canvasOpts: WatermarkCanvas, image: WatermarkImage) {
  const context = canvas.getContext('2d');

  if (context === null) {return}
  
  setCanvasSize(canvas, canvasOpts);
  // firstly ensure that all images loaded 
  const baseImage =  await loadImage(canvasOpts.baseImage)
  const logo = await loadImage(image.watermarkImage)

  context.drawImage(baseImage, 0, 0, baseImage.width, baseImage.height, 0, 0, canvas.width, canvas.height);
  
  context.globalAlpha = image.opacity ?? DEFAULT_LOGO_VALUES.opacity
  context.drawImage(logo, 10, 10);
  

}


function addTextOnCanvas(context: CanvasRenderingContext2D, text: WatermarkText) {
  context.font = text.font ?? 'bold 20px calibri';
  context.fillStyle = text.color ?? DEFAULT_TEXT_VALUES.color;
  context.fillText(text.content, text.dx ?? DEFAULT_TEXT_VALUES.dx, text.dy ?? DEFAULT_TEXT_VALUES.dy);
}

function setCanvasSize(canvas: HTMLCanvasElement, canvasOpts: WatermarkCanvas) {
  canvas.width = canvasOpts.width;
  canvas.height = canvasOpts.height;
}

function loadImage(url: string) {
  const image = new Image();
  return new Promise<HTMLImageElement>((resolve) => {
    image.src = url;
    image.addEventListener("load", () => { resolve(image); });

  });
}
/* async function loadElement({width,height}:{width:number,height:number},image:HTMLImageElement,context:CanvasRenderingContext2D ) {
  await image.src = width
  await context.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height);
} */

