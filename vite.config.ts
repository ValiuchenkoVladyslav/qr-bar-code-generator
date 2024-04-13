import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  root: "./src",

  envDir: "../", // path relative to project root
  publicDir: "../public", // path relative to project root

  build: {
    outDir: "../dist", // path relative to project root

    rollupOptions: {
      input: {
        app: "./src/index.html",
      },
    },
  },

  resolve: {
    // tsconfig paths integration
    alias: [{ find: "~/", replacement: "/" }],
  },
});
