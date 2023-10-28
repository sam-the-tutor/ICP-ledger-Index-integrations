/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import environment from 'vite-plugin-environment';
import dotenv from 'dotenv';
import { join } from 'path';
import { existsSync, readFileSync } from 'fs';

dotenv.config();

const localNetwork = 'local';
const network = process.env['DFX_NETWORK'] || localNetwork;

const internetIdentityUrl =
  network === 'local'
    ? `http://localhost:4943?canisterId=${process.env.CANISTER_ID_INTERNET_IDENTITY}}`
    : 'https://identity.ic0.app/#authorize';

let canisterIdPath: string;
if (network === localNetwork) {
  // Local replica canister IDs
  canisterIdPath = join(__dirname, '.dfx/local/canister_ids.json');
} else {
  // Custom canister IDs
  canisterIdPath = join(__dirname, 'canister_ids.json');
}

if (!existsSync(canisterIdPath)) {
  throw new Error(
    'Unable to find canisters. Running `dfx deploy` should fix this problem.',
  );
}
const canisterIds = JSON.parse(readFileSync(canisterIdPath, 'utf8'));

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },

  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:4943',
        changeOrigin: true,
      },
    },
  },
  plugins: [
    react(),
    environment('all', { prefix: 'CANISTER_' }),
    environment('all', { prefix: 'DFX_' }),
    environment({ BACKEND_CANISTER_ID: '' }),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: 'setupTests.js',
    cache: { dir: '../node_modules/.vitest' },
  },
});
