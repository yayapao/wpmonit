import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
// 用来压缩 js 代码
import { terser } from 'rollup-plugin-terser'
// 用来组合多个文件
import multi from '@rollup/plugin-multi-entry'

// 默认单文件入口
const isMulti = false

export default {
  input: isMulti
    ? {
        // 合并多文件时，可以使用通配符
        include: ['src/hello.ts'],
        exclude: ['src/*.d.ts'],
      }
    : 'src/index.ts',
  output: [
    {
      dir: './npm/',
      format: 'cjs',
      exports: 'auto',
    },
    {
      file: './cdn/bundle.js',
      format: 'iife',
      name: 'bundlename',
    },
  ],
  plugins: isMulti
    ? [multi(), typescript(), resolve(), terser(), commonjs()]
    : [typescript(), resolve(), terser(), commonjs()],
}
