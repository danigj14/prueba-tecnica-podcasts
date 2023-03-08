import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import PodcastEpisodePage from "./pages/episode/PodcastEpisodePage";
import PodcastList from "./pages/podcast-list/PodcastList";
import PodcastPage from "./pages/podcast/PodcastPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <PodcastList />,
      },
      {
        path: "podcast/:podcastId",
        element: <PodcastPage />,
      },
      {
        path: "podcast/:podcastId/episode/:episodeId",
        element: <PodcastEpisodePage />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 20 * 60 * 1000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
