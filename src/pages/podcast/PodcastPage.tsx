import { useParams } from "react-router-dom";
import PodcastDetails from "../../components/PodcastDetails";
import PodcastEpisodeList from "./PodcastEpisodeList";

export default function PodcastPage() {
  const { podcastId } = useParams<{ podcastId: string }>();

  return (
    <div className="flex gap-10 items-start">
      <PodcastDetails podcastId={podcastId!} linksEnabled={false} />
      <PodcastEpisodeList podcastId={podcastId!} />
    </div>
  );
}
