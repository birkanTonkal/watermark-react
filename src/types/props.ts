export interface WatermarkCanvas {
    width: number;
    height: number;
    baseImage:string
}
export interface WatermarkText {
    content:string
    color?: string;
    font?:string;
    opacity?: number;
    dx?: number;
    dy?: number;
}
export interface WatermarkImage {
    watermarkImage:string
}

export interface WatermarkProps {
    canvasOpts:WatermarkCanvas,
    text?:WatermarkText,
    logo?:WatermarkImage
}

