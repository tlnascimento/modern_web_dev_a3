import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        catalogo: 'http://localhost:3001/assets/remoteEntry.js',
        carrinho: 'http://localhost:3002/assets/remoteEntry.js',
        checkout: 'http://localhost:3003/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom', 'shared']
    })
  ],
  build: {
    target: 'esnext'
  },
  server: {
    port: 3000
  }
});