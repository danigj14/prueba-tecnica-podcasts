import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="w-screen h-screen bg-gray-100">
      <header className="container mx-auto p-3 flex justify-between items-center border-b border-gray-300">
        <nav>
          <Link to="/" className="text-lg text-blue-600">
            Podcaster
          </Link>
        </nav>
        <FontAwesomeIcon icon={faSpinner} spin size="lg" />
      </header>
      <main className="container mx-auto p-3">
        <Outlet />
      </main>
    </div>
  );
}
