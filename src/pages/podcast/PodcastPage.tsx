import usePodcastDetails from "@/hooks/usePodcastDetails";
import usePodcastEpisodes from "@/hooks/usePodcastEpisodes";
import useTop100Podcasts from "@/hooks/useTop100Podcasts";
import { useParams } from "react-router-dom";
import PodcastDetails from "../../components/PodcastDetails";
import PodcastEpisodeList from "./PodcastEpisodeList";

export default function PodcastPage() {
  const { podcastId } = useParams<{ podcastId: string }>();

  /**
   * Since the endpoint specified in the documentation to retrieve a
   * podcast details does not return all the details needed to complete
   * the exercise, I am using the same top100podcasts endpoint as in the main page
   * and filtering the results by podcast ID to get the relevant podcast object.
   **/
  const podcastEpisodesQuery = usePodcastEpisodes(podcastId || "");
  const podcastDetailsQuery = usePodcastDetails(podcastId || "");

  if (!podcastEpisodesQuery.isSuccess || !podcastDetailsQuery.isSuccess)
    return <></>;

  return (
    <div className="flex gap-10 items-start">
      <PodcastDetails podcast={podcastDetailsQuery.data} />
      <PodcastEpisodeList episodes={podcastEpisodesQuery.data} />
    </div>
  );
}
