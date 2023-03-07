import { Episode } from "@/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const fetchPodcastEpisodes = async (podcastId: string): Promise<Episode[]> => {
  const response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode&limit=200`
  );

  if (response.ok) {
    const json = await response.json();

    //The returned json array contains the podcast object itself as the first element, and the episodes come next, so we must strip the first item from the array
    return json.results.slice(1).map((episode: any) => ({
      id: episode.trackId.toString(),
      name: episode.trackName,
      date: episode.releaseDate,
      duration: episode.trackTimeMillis,
      description: episode.description,
    }));
  }

  throw Error("Error while loading podcast episodes");
};

export default function usePodcastEpisodes(
  podcastId: string
): UseQueryResult<Episode[]> {
  return useQuery(["podcast", podcastId, "episodes"], () =>
    fetchPodcastEpisodes(podcastId)
  );
}
