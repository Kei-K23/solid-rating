import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import terser from "@rollup/plugin-terser";

import Package from "./package.json";

const vitestOptions = {
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/dom/setupTests.ts",
    exclude: ["**/vite/**", "**/node_modules/**", "**/dist/**", "**/ct/**"],
  },
};

export default defineConfig(({ command }) => ({
  ...vitestOptions,
  define: {
    __DEV__: command !== "build",
  },
  build: {
    minify: "terser",
    lib: {
      name: Package.name,
      entry: "src/index.ts",
      formats: ["es", "cjs"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["solid-js", "solid-js/web"],
      output: {
        globals: {
          "solid-js": "Solid",
          "solid-js/web": "SolidWeb",
        },
      },
      plugins: [
        terser({
          compress: {
            defaults: true,
            drop_console: false,
          },
        }),
      ],
    },
  },
  plugins: [solid()],
}));
