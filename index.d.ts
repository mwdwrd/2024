interface IProject {
  title: string;
  client: string;
  categories: string[];
  description: string;
  slug: string;
  thumb?: {
    type: string;
    src: string;
  };
}
