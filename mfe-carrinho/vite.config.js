import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'carrinho',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.jsx'
      },
      shared: ['react', 'react-dom', 'shared']
    })
  ],
  build: {
    target: 'esnext'
  },
  server: {
    port: 3002
  }
});