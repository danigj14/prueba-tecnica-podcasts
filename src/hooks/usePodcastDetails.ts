import { Podcast } from "@/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { XMLParser } from "fast-xml-parser";

const fetchPodcastDetails = async (podcastId: string): Promise<Podcast> => {
  const itunesResponse = await fetch(
    `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=${podcastId}`
  );

  if (!itunesResponse.ok) throw Error("Error while loading podcast episodes");

  const podcastDetails = await itunesResponse.json();
  const feedUrl = podcastDetails.results[0].feedUrl;

  const feedResponse = await fetch(feedUrl);

  if (!feedResponse.ok) throw Error("Error while loading podcast episodes");

  const parsedFeed = new XMLParser().parse(await feedResponse.text());

  return {
    id: podcastId,
    name: podcastDetails.results[0].trackName,
    author: podcastDetails.results[0].artistName,
    imgUrl: podcastDetails.results[0].artworkUrl100,
    description: parsedFeed.rss.channel.description,
  };
};

export default function usePodcastDetails(
  podcastId: string
): UseQueryResult<Podcast> {
  return useQuery(["podcast", podcastId], () => fetchPodcastDetails(podcastId));
}
