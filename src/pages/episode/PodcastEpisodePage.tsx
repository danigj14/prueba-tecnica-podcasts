import PodcastDetails from "@/components/PodcastDetails";
import { useParams } from "react-router-dom";
import PodcastEpisodeDetails from "./EpisodeDetails";

export default function PodcastEpisodePage() {
  const { podcastId, episodeId } = useParams();

  return (
    <div className="flex gap-10 items-start">
      <PodcastDetails podcastId={podcastId!} />
      <PodcastEpisodeDetails podcastId={podcastId!} episodeId={episodeId!} />
    </div>
  );
}
