import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./", // ✅ Important for Vercel deployment
  plugins: [react()],
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
