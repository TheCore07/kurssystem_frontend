import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    server: {
        cors: {
            origin: 'http://localhost:YOUR_PORT', // replace with your port with the ORDS port
        },
    },
    build: {
        manifest: true,
        rollupOptions: {
            input: '/path/to/main.js',
        },
    },
    plugins: [
      react(),
      tailwindcss()
  ],
})
