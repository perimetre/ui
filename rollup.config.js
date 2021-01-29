import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

import pkg from './package.json';

// eslint-disable-next-line import/no-default-export
export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ clean: true, useTsconfigDeclarationDir: true, tsconfig: 'tsconfig.build.json' }),
      postcss(),
      copy({
        targets: [{ src: 'src/styles/components*', dest: 'build/postcss' }]
      })
    ]
  },
  {
    input: 'src/index.css',
    output: [
      {
        file: 'build/index.css',
        format: 'es'
      }
    ],
    plugins: [postcss({ extract: true })],
    /**
     * Removes the "overwrites a previously emitted file of the same name." warn
     * Because we actually want to output the css
     *
     * @param warning the warning object
     * @param warn the warn callback
     */
    onwarn(warning, warn) {
      if (warning.code === 'FILE_NAME_CONFLICT') return;
      warn(warning);
    }
  },
  {
    input: 'src/index.css',
    output: [
      {
        file: 'build/index.min.css',
        format: 'es'
      }
    ],
    plugins: [postcss({ minimize: true, extract: true })],
    /**
     * Removes the "overwrites a previously emitted file of the same name." warn
     * Because we actually want to output the css
     *
     * @param warning the warning object
     * @param warn the warn callback
     */
    onwarn(warning, warn) {
      if (warning.code === 'FILE_NAME_CONFLICT') return;
      warn(warning);
    }
  }
];
