import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Reemplaza "nombre-del-repositorio" con el nombre exacto de tu repo en GitHub
export default defineConfig({
  base: "/",
  plugins: [react()],
});

