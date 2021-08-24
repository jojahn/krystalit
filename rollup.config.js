import { copy } from '@web/rollup-plugin-copy';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    typescript(),
    copy({ patterns: '**', rootDir: './public' })
	],
};