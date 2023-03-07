export interface Podcast {
  id: string;
  name: string;
  author: string;
  description: string;
  imgUrl: string;
}

export interface Episode {
  id: string;
  name: string;
  date: string;
  duration: number;
  description: string;
}
