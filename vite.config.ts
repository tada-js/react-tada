import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';

export default defineConfig(({ command }): UserConfig => {
  if (command === 'build') {
    return {
      plugins: [react()],
      build: {
        outDir: 'lib',
        lib: {
          name: 'react-tada',
          fileName: 'index',
          entry: 'src/index.ts',
          formats: ['cjs'],
        },
        minify: false,
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
      },
    };
  } else {
    return {
      plugins: [react()],
    };
  }
});
