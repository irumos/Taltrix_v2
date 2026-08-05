import { createFileRoute } from "@tanstack/react-router";
import { WorkspacePage } from "@/pages/WorkspacePage";

const TITLE = "Taltrix Playground | Interactive Code Visualizer";
const DESCRIPTION =
  "The Taltrix workspace: Monaco editor, animated variables, call stack, memory graph, terminal and an execution timeline in one professional IDE layout.";

export const Route = createFileRoute("/workspace")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkspacePage,
});
