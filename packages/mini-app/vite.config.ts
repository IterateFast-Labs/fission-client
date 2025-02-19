import MillionLint from '@million/lint';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    MillionLint.vite({
      enabled: !(
        loadEnv('', process.cwd()).VITE_PROVIDER_DISABLE_MILLION === 'true'
      ),
    }),
    react(),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
