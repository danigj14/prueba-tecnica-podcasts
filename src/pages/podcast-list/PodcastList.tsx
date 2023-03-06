import Input from "@/components/Input";
import useTop100Podcasts from "@/hooks/useTop100Podcasts";
import { useState } from "react";
import PodcastCard from "./PodcastCard";

export default function PodcastList() {
  const podcastsQuery = useTop100Podcasts();
  const [filter, setFilter] = useState<string>("");

  if (!podcastsQuery.isSuccess) return <></>;

  const filteredPodcasts = podcastsQuery.data.filter(
    (podcast) =>
      podcast.name.toLowerCase().includes(filter.toLowerCase()) ||
      podcast.author.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-end items-center gap-2">
        <span className="py-1 px-2 bg-blue-600 rounded-xl text-sm font-bold text-gray-100">
          {filteredPodcasts.length}
        </span>
        <Input
          placeholder="Filter podcasts..."
          value={filter}
          onChange={setFilter}
        />
      </div>
      <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-10">
        {filteredPodcasts.map((podcast) => (
          <PodcastCard key={podcast.id} podcast={podcast} />
        ))}
      </div>
    </>
  );
}
