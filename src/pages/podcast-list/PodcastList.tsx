import useTop100Podcasts from "@/hooks/useTop100Podcasts";
import PodcastCard from "./PodcastCard";

export default function PodcastList() {
  const podcastsQuery = useTop100Podcasts();

  if (podcastsQuery.isSuccess) console.log(podcastsQuery.data);

  return (
    <>
      <div className="flex justify-end items-center gap-2">
        <span className="py-1 px-2 bg-blue-600 rounded-xl text-sm font-bold text-gray-100">
          100
        </span>
        <input
          className="py-1 px-2 border border-gray-300 rounded"
          placeholder="Filter podcasts..."
        />
      </div>
      {podcastsQuery.isSuccess && (
        <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-10">
          {podcastsQuery.data.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>
      )}
    </>
  );
}
