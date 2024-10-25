import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/subhash_portfolio/",  // This ensures paths work properly from the subdirectory
  build: {
    outDir: "build",    // or 'dist', whichever you're using
  },
  plugins: [tsconfigPaths(), react()],
});
