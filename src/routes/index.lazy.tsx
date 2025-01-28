import { createLazyFileRoute } from "@tanstack/react-router";
import App from "../modules/cpf/pages";

export const Route = createLazyFileRoute("/")({
  component: App,
});
