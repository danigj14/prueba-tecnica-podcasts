import usePodcastDetails from "@/hooks/usePodcastDetails";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

interface PodcastDetailsProps {
  podcastId: string;
  linksEnabled?: boolean;
}

export default function PodcastDetails({
  podcastId,
  linksEnabled = true,
}: PodcastDetailsProps) {
  const podcastDetailsQuery = usePodcastDetails(podcastId);

  if (!podcastDetailsQuery.isSuccess) return <></>;

  return (
    <div className="w-1/4 p-4 shadow bg-gray-50 flex-shrink-0">
      {linksEnabled ? (
        <>
          <Link to={`/podcast/${podcastId}`}>
            <img
              className="mb-3 mx-auto"
              src={podcastDetailsQuery.data.imgUrl}
            />
          </Link>
          <div className="py-3 px-2 border-t border-gray-300">
            <Link to={`/podcast/${podcastId}`}>
              <h1 className="font-bold">{podcastDetailsQuery.data.name}</h1>
            </Link>
            <Link to={`/podcast/${podcastId}`}>
              <p className="text-sm italic">
                by {podcastDetailsQuery.data.author}
              </p>
            </Link>
          </div>
        </>
      ) : (
        <>
          <img className="mb-3 mx-auto" src={podcastDetailsQuery.data.imgUrl} />
          <div className="py-3 px-2 border-t border-gray-300">
            <h1 className="font-bold">{podcastDetailsQuery.data.name}</h1>
            <p className="text-sm italic">
              by {podcastDetailsQuery.data.author}
            </p>
          </div>
        </>
      )}
      <div className="py-3 border-t border-gray-300 text-gray-900">
        <h2 className="font-bold">Description:</h2>
        <p
          className="text-sm italic"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(podcastDetailsQuery.data.description),
          }}
        />
      </div>
    </div>
  );
}
