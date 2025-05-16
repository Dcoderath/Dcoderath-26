// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   base: '/Dcoderath-26/',  // This must match your repo name exactly (case sensitive!)
//   plugins: [react()],
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Dcoderath-26/',  // Only needed for GitHub Pages; safe to keep
  plugins: [react()],
  server: {
    host: true,  // Exposes the dev server to your local network
    port: 5173,  // Or any open port
  },
});
