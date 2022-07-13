export interface WatermarkSource {
    width?: number;
    height?: number;
    color?: string;
    fontSize?: number;
    fontFamily?: string;
    opacity?: number;
    imageUrl?:string
}

export interface WatermarkPosition {
    dx: number;
    dy: number;
}

