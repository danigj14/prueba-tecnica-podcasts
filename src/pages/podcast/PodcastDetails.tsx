import { Podcast } from "@/types";

interface PodcastDetailsProps {
  podcast: Podcast;
}

export default function PodcastDetails({ podcast }: PodcastDetailsProps) {
  return (
    <div className="w-1/4 p-4 shadow bg-gray-50">
      <img className="mb-3 mx-auto" src={podcast.imgUrl} />
      <div className="py-3 px-2 border-t border-gray-300">
        <h1 className="font-bold">{podcast.name}</h1>
        <p className="text-sm italic">by {podcast.author}</p>
      </div>
      <div className="py-3 border-t border-gray-300 text-gray-900">
        <h2 className="font-bold">Description:</h2>
        <p className="text-sm italic">{podcast.description}</p>
      </div>
    </div>
  );
}
