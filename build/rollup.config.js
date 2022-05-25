//import buble from 'rollup-plugin-buble';
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve'); // 解析node_modules第三方以来关系
const commonjs = require('rollup-plugin-commonjs'); // 处理非ES6的模块，如CommonJS的模块
const progress = require('rollup-plugin-progress'); // 展示打包进度
const filesize = require('rollup-plugin-filesize'); // 在CLI显示文件大小
const babel = require('rollup-plugin-babel');
const eslint = require('rollup-plugin-eslint');
const cleanup = require('rollup-plugin-cleanup');
const terser = require("rollup-plugin-terser");

export default [
	{
		input: 'src/index.js',
		plugins: [
			resolve(),
			eslint.eslint(),
			cleanup({
			  comments: 'all'
			}),
			terser.terser({
				output: {
				  comments: /@preserve|@license|@cc_on/i
				}
			  }),
			filesize(),
			progress({
			  clearLine: false
			})
		],
	//	external: ['axios','lodash.merge','dtc','gsap','hotkeys-js','howler','crypto-js','upng-js', 'xlsx', 'lodash-es'],
		output: [
			{
				format: 'esm',
				file: 'build/index.module.js',
				indent: '\t',
				minify: true 
			}
		]
	}
];