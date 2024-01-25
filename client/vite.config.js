import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/server": {
        target: "http://localhost:4000",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
