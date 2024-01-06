import { babel } from "@rollup/plugin-babel";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    babel({ extensions: [".ts", ".tsx"], babelHelpers: "bundled" }),
    react({ fastRefresh: false }),
  ],
  base: "/weather-app/",
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },
});
