import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), vanillaExtractPlugin()],
    server: {
        proxy: {
            '/word': {
                random: 'https://random-word-api.herokuapp.com',
                changeOrigin: true,
                rewrite: path => path.replace('/word', ''),
            },
        },
    },
});
