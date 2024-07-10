declare enum ThumbType {
  Image = "image",
  Video = "video",
}

interface IProject {
  title: string;
  description: string;
  slug: string;
  client: string;
  headline: string;
  categories: string[];
  thumb: IThumb;
  modules: Asset[][];
}

interface BaseAsset {
  alt: string;
  format: "cinema" | "widescreen" | "standard" | "photo" | "square";
}

interface VideoSource {
  mp4?: string;
  webm?: string;
}

interface VideoAsset extends BaseAsset {
  type: 'video';
  src: VideoSource;
}

interface ImageAsset extends BaseAsset {
  type: 'image';
  src: string;
}

type Asset = VideoAsset | ImageAsset;


interface ITile {
  title: string;
  url: string;
  thumb: IThumb;
}

interface IThumb {
  type: string;
  src: string;
  alt?: string;
}