import { Episode } from "@/types";
import { formatDate, formatDuration } from "@/util/util";
import { Link, useParams } from "react-router-dom";

interface PodcastEpisodeListProps {
  episodes: Episode[];
}

export default function PodcastEpisodeList({
  episodes,
}: PodcastEpisodeListProps) {
  return (
    <div className="flex-grow gap-4">
      <h2 className="p-4 bg-gray-50 shadow text-xl font-bold">
        Episodes: {episodes.length}
      </h2>
      <div className="p-6 bg-gray-50 shadow mt-6">
        <table className="table-auto border-collapse border-spacing-4 w-full">
          <thead>
            <tr>
              <th className="p-2 w-[80%] text-left border-b-2 border-gray-300">
                Title
              </th>
              <th className="p-2 w-[10%] text-left border-b-2 border-gray-300">
                Date
              </th>
              <th className="p-2 w-[10%] text-left border-b-2 border-gray-300">
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((episode) => (
              <EpisodeListItem key={episode.id} episode={episode} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface EpisodeListItemProps {
  episode: Episode;
}

function EpisodeListItem({ episode }: EpisodeListItemProps) {
  const { podcastId } = useParams();

  return (
    <tr className="border-b border-gray-300 odd:bg-gray-100">
      <td className="p-2">
        <Link
          className="text-blue-600 hover:text-blue-800"
          to={`/podcast/${podcastId}/episode/${episode.id}`}
        >
          {episode.name}
        </Link>
      </td>
      <td className="p-2">{formatDate(new Date(episode.date))}</td>
      <td className="p-2">{formatDuration(episode.duration)}</td>
    </tr>
  );
}
