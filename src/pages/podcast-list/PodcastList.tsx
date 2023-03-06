import PodcastCard from "./PodcastCard";

export default function PodcastList() {
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
      <div className="mt-6 grid grid-cols-4 gap-4">
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
        <PodcastCard />
      </div>
    </>
  );
}
