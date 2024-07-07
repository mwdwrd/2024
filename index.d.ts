declare enum ThumbType {
  Image = "image",
  Video = "video",
}

interface IProject {
  title: string;
  description: string;
  slug: string;
  client: string;
  categories: string[];
  thumb: IThumb;
}

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