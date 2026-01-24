import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      exclude: [
        'src/stories/**', 
        '**/*.stories.tsx', 
        '**/*.stories.ts'
      ],
      include: ['src/components/**', 'src/index.ts'],
      skipDiagnostics: false,
      insertTypesEntry: true, // create automatically file type,
      rollupTypes: false,
      tsconfigPath: './tsconfig.app.json',
    }), 
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'UiKit',
      fileName: (format) => `ui-kit.${format}.js`,
    },
    rollupOptions: {
      // Important: Do not bundle React and ReactDome to library
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});