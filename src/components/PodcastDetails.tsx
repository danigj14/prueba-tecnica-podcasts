import usePodcastDetails from "@/hooks/usePodcastDetails";
import { Podcast } from "@/types";

interface PodcastDetailsProps {
  podcastId: string;
}

export default function PodcastDetails({ podcastId }: PodcastDetailsProps) {
  const podcastDetailsQuery = usePodcastDetails(podcastId);

  if (!podcastDetailsQuery.isSuccess) return <></>;

  return (
    <div className="w-1/4 p-4 shadow bg-gray-50">
      <img className="mb-3 mx-auto" src={podcastDetailsQuery.data.imgUrl} />
      <div className="py-3 px-2 border-t border-gray-300">
        <h1 className="font-bold">{podcastDetailsQuery.data.name}</h1>
        <p className="text-sm italic">by {podcastDetailsQuery.data.author}</p>
      </div>
      <div className="py-3 border-t border-gray-300 text-gray-900">
        <h2 className="font-bold">Description:</h2>
        <p
          className="text-sm italic"
          dangerouslySetInnerHTML={{
            __html: podcastDetailsQuery.data.description,
          }}
        />
      </div>
    </div>
  );
}
