import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Dcoderath-26/',  // This must match your repo name exactly (case sensitive!)
  plugins: [react()],
});
