import { createLazyFileRoute } from "@tanstack/react-router";
import ListNews from "../modules/news/pages/list";

export const Route = createLazyFileRoute("/news")({
  component: ListNews,
});
