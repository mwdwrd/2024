export interface IProject {
  title: string;
  client: string;
  headline?: string;
  description: string;
  categories: string[];
  color?: {
    dark: string;
    light: string;
  };
  slug: string;
  logo?: {
    type: string;
    size: number;
  };
  thumb: {
    type: string;
    src: string | string[];
  };
  modules: Asset[][];
}

export interface BaseAsset {
  alt: string;
  format: "cinema" | "widescreen" | "standard" | "photo" | "square";
}

export interface VideoSource {
  mp4?: string;
  webm?: string;
}

export interface VideoAsset extends BaseAsset {
  type: 'video';
  src: VideoSource;
}

export interface ImageAsset extends BaseAsset {
  type: 'image';
  src: string;
}

export type Asset = VideoAsset | ImageAsset;

export interface ITile {
  title: string;
  url: string;
  thumb: IThumb;
}

export interface IThumb {
  type: string;
  src: string | string[];
  alt?: string;
}