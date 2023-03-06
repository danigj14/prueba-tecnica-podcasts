import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIsFetching, useQueryClient } from "@tanstack/react-query";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  const fetchingQueries = useIsFetching();

  return (
    <div className="min-w-screen min-h-screen bg-gray-100">
      <header className="container mx-auto p-3 flex justify-between items-center border-b border-gray-300">
        <nav>
          <Link to="/" className="text-lg text-blue-600">
            Podcaster
          </Link>
        </nav>
        {fetchingQueries > 0 ? (
          <FontAwesomeIcon icon={faSpinner} spin size="lg" />
        ) : null}
      </header>
      <main className="container mx-auto p-3">
        <Outlet />
      </main>
    </div>
  );
}
