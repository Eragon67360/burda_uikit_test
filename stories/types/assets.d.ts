export interface ImageAsset {
    src: string;
    width?: number;
    height?: number;
}

declare module '*.jpg' {
    const content: ImageAsset;
    export default content;
}

declare module '*.png' {
    const content: ImageAsset;
    export default content;
}

declare module '*.webp' {
    const content: ImageAsset;
    export default content;
}
