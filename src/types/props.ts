export interface WatermarkCanvas {
    width: number
    height: number
    baseImage: string
}
export interface WatermarkText {
    content: string
    color?: string
    font?: string
    dx?: number
    dy?: number
}
export interface WatermarkImage {
    watermarkImage: string
    dx?: number
    dy?: number
    dwidth?:number
    dheight?:number
    opacity?: number
}

export interface WatermarkProps {
    canvasOpts: WatermarkCanvas
    text?: WatermarkText[]
    logo?: WatermarkImage
}
