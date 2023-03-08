import { Podcast } from "@/types";
import { UseQueryResult } from "@tanstack/react-query";
import useCachedQuery from "./useCachedQuery";

const fetchPodcasts = async (): Promise<Podcast[]> => {
  const response = await fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  );

  if (response.ok) {
    const json = await response.json();

    return json.feed.entry.map((podcastJson: any) => ({
      id: podcastJson.id.attributes["im:id"],
      name: podcastJson["im:name"].label,
      author: podcastJson["im:artist"].label,
      description: podcastJson["summary"].label,
      imgUrl: podcastJson["im:image"][2].label,
    }));
  }

  throw Error("Error while loading podcasts");
};

export default function useTop100Podcasts(): UseQueryResult<Podcast[]> {
  const podcastsQuery = useCachedQuery<Podcast[]>(["podcasts"], fetchPodcasts);

  return podcastsQuery;
}
