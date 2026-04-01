import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const PROJECT_ROOT = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const plugins = [react(), tailwindcss(), jsxLocPlugin()];

  return {
    root: PROJECT_ROOT,
    publicDir: path.join(PROJECT_ROOT, "client", "public"),
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(PROJECT_ROOT, "client", "src"),
      },
    },
    build: {
      outDir: path.join(PROJECT_ROOT, "dist"),
      emptyOutDir: true,
      rollupOptions: {
        input: path.join(PROJECT_ROOT, "index.html"),
      },
    },
    server: {
      port: 3000,
      strictPort: false, // Will find next available port if 3000 is busy
      host: true,
    },
  };
});
