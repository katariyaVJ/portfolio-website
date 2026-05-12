import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Root base URL for Vercel, Netlify, or any custom domain (not GitHub project subpaths).
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  server: {
    open: true,
    host: false,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
