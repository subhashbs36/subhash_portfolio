import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",  // This ensures paths work properly from the subdirectory
  build: {
    outDir: 'build',  // Specify the output directory for the build
  },
  plugins: [tsconfigPaths(), react()],
});
