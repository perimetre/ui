import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

// eslint-disable-next-line import/no-default-export
export default [
  // Outputs a javascript bundle for our components
  {
    input: 'src/index.tsx',
    output: [
      {
        dir: 'dist/cjs',
        format: 'cjs',
        sourcemap: true
      },
      {
        dir: 'dist/esm',
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      // Copy the original postcss files so the user can choose to use those if wanted
      copy({
        targets: [{ src: ['src/index.css', 'src/components*', '!**/*.{tsx, ts, jsx, js}'], dest: 'dist/postcss' }]
      }),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      // Utilize a specific tsconfig only for building
      typescript({ clean: true, useTsconfigDeclarationDir: true, tsconfig: 'tsconfig.build.json' }),
      postcss()
    ]
  },
  // Output a general non minified index.css
  {
    input: 'src/index.css',
    output: [
      {
        file: 'dist/index.css',
        format: 'es'
      }
    ],
    // Extract the css in a file
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
  // Output a general minified index.min.css
  {
    input: 'src/index.css',
    output: [
      {
        file: 'dist/index.min.css',
        format: 'es'
      }
    ],
    // Turn on mification
    // Extract the css in a file
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
