import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://jenifer-al.github.io",
  base: "/ejercicio1-astro-perfil/",
  vite: {
    plugins: [tailwindcss()],
  },
});