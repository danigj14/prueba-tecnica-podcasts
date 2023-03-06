import { useParams } from "react-router-dom";
import PodcastDetails from "./PodcastDetails";
import PodcastEpisodeList from "./PodcastEpisodeList";

export default function PodcastPage() {
  const { podcastId } = useParams();

  return (
    <div className="flex gap-10 items-start">
      <PodcastDetails />
      <PodcastEpisodeList />
    </div>
  );
}
