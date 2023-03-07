interface PodcastEpisodeDetailsProps {
  podcastId: string;
  episodeId: string;
}

export default function PodcastEpisodeDetails({
  podcastId,
}: PodcastEpisodeDetailsProps) {
  return (
    <div className="flex-grow gap-4">
      <h2>Episode Name</h2>
      <p dangerouslySetInnerHTML={{ __html: "Episode Description" }}></p>
    </div>
  );
}
