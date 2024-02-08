import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import * as path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/ts/app.tsx'],
            refresh: true,
        }),
    ],
    resolve: {
      alias: [
        { find: '@components', replacement: path.resolve(__dirname, 'resources/ts/Components') },
        { find: '@layouts', replacement: path.resolve(__dirname, 'resources/ts/Layouts') },
        { find: '@utilities', replacement: path.resolve(__dirname, 'resources/ts/Utilities') },
        { find: '@constants', replacement: path.resolve(__dirname, 'resources/ts/Constants') }
      ]
    }
});
