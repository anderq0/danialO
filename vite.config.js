import { defineConfig } from "vite";

export default defineConfig({
  base: "./", // Если репозиторий не привязан к кастомному домену, оставь "./"
  build: {
    outDir: "dist",
  },
});