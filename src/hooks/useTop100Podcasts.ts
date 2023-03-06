import { Podcast } from "@/types";
import { useQuery } from "@tanstack/react-query";

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
      imgUrl: podcastJson["im:image"][2].label,
    }));
  }

  throw Error("Error while loading podcasts");
};

export default function useTop100Podcasts() {
  const podcastsQuery = useQuery<Podcast[]>(["podcasts"], fetchPodcasts);

  return podcastsQuery;
}
