import usePodcastEpisodes from "@/hooks/usePodcastEpisodes";
import useTop100Podcasts from "@/hooks/useTop100Podcasts";
import { useParams } from "react-router-dom";
import PodcastDetails from "./PodcastDetails";
import PodcastEpisodeList from "./PodcastEpisodeList";

export default function PodcastPage() {
  const { podcastId } = useParams();

  /**
   * Since the endpoint specified in the documentation to retrieve a
   * podcast details does not return all the details needed to complete
   * the exercise, I am using the same top100podcasts endpoint as in the main page
   * and filtering the results by podcast ID to get the relevant podcast object.
   **/
  const podcastEpisodesQuery = usePodcastEpisodes(podcastId || "");
  const podcastsQuery = useTop100Podcasts();

  if (!podcastEpisodesQuery.isSuccess || !podcastsQuery.isSuccess) return <></>;

  const podcast = podcastsQuery.data.find(
    (podcast) => podcast.id === podcastId
  );

  if (!podcast) return <></>;

  return (
    <div className="flex gap-10 items-start">
      <PodcastDetails podcast={podcast} />
      <PodcastEpisodeList episodes={podcastEpisodesQuery.data} />
    </div>
  );
}
