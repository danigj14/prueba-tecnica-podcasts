import { Podcast } from "@/types";

interface PodcastCardProps {
  podcast: Podcast;
}

export default function PodcastCard({ podcast }: PodcastCardProps) {
  return (
    <div className="bg-gray-50 shadow-md flex flex-col items-center gap-2 p-4 mt-20">
      <img src={podcast.imgUrl} className="rounded-full -mt-20" />
      <h1 className="font-bold text-lg">{podcast.name}</h1>
      <p className="font-bold text-sm text-gray-600">
        Author: {podcast.author}
      </p>
    </div>
  );
}
