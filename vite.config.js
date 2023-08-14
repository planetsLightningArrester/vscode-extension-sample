/* eslint-disable @typescript-eslint/naming-convention */
import { resolve, join } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: [
      { find: /@(.*)/, replacement: join(resolve(__dirname, 'src'), "$1") },
    ],
  },
  build: {
    outDir: "out",  // Same as tsc, since only tsc enables useful debugging (and "main" field in package.json is "out/...")
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/extension.ts'),
      name: 'vscode-extension-sample-vite',
      // the proper extensions will be added
      fileName: 'extension',
      formats: ['cjs']
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vscode'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vscode: 'vscode',
        },
      },
    },
  },
});