export default function PodcastEpisodeList() {
  return (
    <div className="flex-grow gap-4">
      <h2 className="p-4 bg-gray-50 shadow text-xl font-bold">Episodes: 66</h2>
      <div className="p-6 bg-gray-50 shadow mt-6">
        <table className="table-auto border-collapse border-spacing-4 w-full">
          <thead>
            <tr>
              <th className="p-2 w-4/6 text-left border-b-2 border-gray-300">
                Title
              </th>
              <th className="p-2 w-1/6 text-left border-b-2 border-gray-300">
                Date
              </th>
              <th className="p-2 w-1/6 text-left border-b-2 border-gray-300">
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            <EpisodeListItem />
            <EpisodeListItem />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function EpisodeListItem() {
  return (
    <tr className="border-b border-gray-300 odd:bg-gray-100">
      <td className="p-2">EpisodeTitle</td>
      <td className="p-2">11/11/11</td>
      <td className="p-2">12:34</td>
    </tr>
  );
}
