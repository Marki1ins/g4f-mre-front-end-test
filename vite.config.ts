import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 4173,
    open: false,
    host: "0.0.0.0",
  },
  plugins: [TanStackRouterVite(), react()],
});
