import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // also reachable from your phone on the same Wi-Fi
    port: 5175, // BAGIRE uses 5174, so both can run at the same time
    open: true // opens the browser automatically on `npm run dev`
  }
});
