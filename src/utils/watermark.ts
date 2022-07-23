import { WatermarkCanvas, WatermarkImage, WatermarkText } from '../types/props'

const DEFAULT_TEXT_VALUES = {
    font: 'bold 20px calibri',
    color: 'rgba(255,0,0,0.5)',
    dx: 0,
    dy: 0,
}

const DEFAULT_LOGO_VALUES = {
    opacity: 1,
    dx:0,
    dy:0,
    dwidth:50,
    dheight:50
}

export async function addTextWatermark(canvas: HTMLCanvasElement, canvasOpts: WatermarkCanvas, text: WatermarkText[]) {
    const context = canvas.getContext('2d')

    if (context === null) { return }

    setCanvasSize(canvas, canvasOpts)

    const baseImage = await loadImage(canvasOpts.baseImage)
    context.drawImage(baseImage, 0, 0, baseImage.width, baseImage.height, 0, 0, canvas.width, canvas.height)

    // * For multi text feature
    text.forEach((text) => {
        addTextOnCanvas(context, text)
    })
}

export async function addImageWatermark(canvas: HTMLCanvasElement, canvasOpts: WatermarkCanvas, targetImage: WatermarkImage) {
    const context = canvas.getContext('2d')

    if (context === null) { return }

    setCanvasSize(canvas, canvasOpts)
    // firstly ensure that all images loaded
    const baseImage = await loadImage(canvasOpts.baseImage)
    const logo = await loadImage(targetImage.watermarkImage)

    context.drawImage(baseImage, 0, 0, baseImage.width, baseImage.height, 0, 0, canvas.width, canvas.height)

    context.globalAlpha = targetImage.opacity ?? DEFAULT_LOGO_VALUES.opacity
    context.drawImage(logo, targetImage.dx ?? DEFAULT_LOGO_VALUES.dx, targetImage.dy ?? DEFAULT_LOGO_VALUES.dy, 
      targetImage.dwidth ?? DEFAULT_LOGO_VALUES.dwidth, targetImage.dheight ?? DEFAULT_LOGO_VALUES.dwidth)

}

function addTextOnCanvas(context: CanvasRenderingContext2D, text: WatermarkText) {
    context.font = text.font ?? 'bold 20px calibri'
    context.fillStyle = text.color ?? DEFAULT_TEXT_VALUES.color
    context.fillText(text.content, text.dx ?? DEFAULT_TEXT_VALUES.dx, text.dy ?? DEFAULT_TEXT_VALUES.dy)
}

function setCanvasSize(canvas: HTMLCanvasElement, canvasOpts: WatermarkCanvas) {
    canvas.width = canvasOpts.width
    canvas.height = canvasOpts.height
}

function loadImage(url: string) {
    const image = new Image()
    return new Promise<HTMLImageElement>((resolve) => {
        image.src = url
        image.addEventListener('load', () => {
            resolve(image)
        })
    })
}
