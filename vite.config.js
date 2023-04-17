import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Creación de alias
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // GitHub Pages
  base: "/Vue-JS-Vite/",
  resolve: {
    // Aquí se pueden añadir los alias a las carpetas
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
