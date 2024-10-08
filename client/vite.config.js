import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/gifts": {
        target: "http://localhost:3001", // 您的后端服务器
      },
    },
  },
});
