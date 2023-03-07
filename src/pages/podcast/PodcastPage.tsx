import usePodcastDetails from "@/hooks/usePodcastDetails";
import usePodcastEpisodes from "@/hooks/usePodcastEpisodes";
import useTop100Podcasts from "@/hooks/useTop100Podcasts";
import { useParams } from "react-router-dom";
import PodcastDetails from "../../components/PodcastDetails";
import PodcastEpisodeList from "./PodcastEpisodeList";

export default function PodcastPage() {
  const { podcastId } = useParams<{ podcastId: string }>();

  return (
    <div className="flex gap-10 items-start">
      <PodcastDetails podcastId={podcastId || ""} />
      <PodcastEpisodeList podcastId={podcastId || ""} />
    </div>
  );
}
