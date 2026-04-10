import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
   plugins: [react(), tailwindcss()],

   root: "./src",
   publicDir: "../public",
   build: {
      outDir: "../dist",
   },

   resolve: {
      // tsconfig paths integration
      alias: [{ find: "~/", replacement: "/" }],
   },
});
