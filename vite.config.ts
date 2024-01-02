import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { babel } from '@rollup/plugin-babel';
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [babel({ extensions: ['.ts', '.tsx'], babelHelpers: 'bundled' }), react({ fastRefresh: false })],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
