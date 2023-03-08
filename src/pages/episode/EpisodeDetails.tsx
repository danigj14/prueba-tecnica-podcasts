import usePodcastEpisodes from "@/hooks/usePodcastEpisodes";
import DOMPurify from "dompurify";

interface PodcastEpisodeDetailsProps {
  podcastId: string;
  episodeId: string;
}

export default function PodcastEpisodeDetails({
  podcastId,
  episodeId,
}: PodcastEpisodeDetailsProps) {
  const episodesQuery = usePodcastEpisodes(podcastId);

  if (!episodesQuery.isSuccess) return <></>;

  const episode = episodesQuery.data.find((ep) => ep.id === episodeId);

  return (
    <div className="flex-grow flex flex-col p-4 gap-4 shadow bg-gray-50">
      <h1 className="text-2xl font-bold mb-2">{episode!.name}</h1>
      <p
        className="italic"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(episode!.description),
        }}
      ></p>
      <audio
        controls
        className="border-t border-gray-300 pt-4 mt-4 rounded w-full"
      ></audio>
    </div>
  );
}
