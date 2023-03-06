import { Podcast } from "@/types";

interface PodcastCardProps {
  podcast: Podcast;
}

export default function PodcastCard({ podcast }: PodcastCardProps) {
  return (
    <div className="shadow-md flex flex-col items-center">
      <img src={podcast.imgUrl} />
      <h1 className="font-bold text-lg">{podcast.name}</h1>
      <p className="font-bold text-sm text-gray-600">Author: {podcast.author}</p>
    </div>
  );
}
