import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import pugPlugin from "vite-plugin-pug";
import path from 'path';
// import { resolve, dirname } from 'node:path';
// import { fileURLToPath } from 'node:url';
import eslintPlugin from 'vite-plugin-eslint';
import { VitePluginFonts } from 'vite-plugin-fonts';

const options = {};
const locals = { name: "My Pug" };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    pugPlugin(options, locals),
    eslintPlugin(),
    VitePluginFonts({
      google: {
        families: ['Abril Fatface', 'Roboto Mono', 'Geologica'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@ui': path.resolve(__dirname, './src/UI'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/sass/import.scss";
        `,
      },
    },
  },
});
