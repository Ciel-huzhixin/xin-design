const gulp = require('gulp');
const path = require('path');
const rimrf = require('rimraf');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const merge2 = require('merge2');
const { compilerOptions } = require('./tsconfig.json');

const tsConfig = {
  noUnusedParameters: true, // 不能有未使用的参数
  noUnusedLocals: true, // 不能有未使用的本地变量
  strictNullChecks: true, // 严格null检查
  target: 'es6', // 编译js版本
  jsx: 'preserve',  // jsx如何处理，preserve代表保留不处理，react代表将jsx变成React.createElement()
  moduleResolution: 'node', // 模块查找规则
  declaration: true, // 生成声明d.ts文件
  allowSyntheticDefaultImports: true, // 允许默认导出 
  ...compilerOptions
}

const babelConfig = require('./babel.config');
// 需要编译的目录
const source = [
  'components/**/*.{js,jsx,ts,tsx}',
  '!components/**/*.stories.{js,jsx,ts,tsx}',
  '!components/**/unit/*',
  '!components/**/e2e/*'
]

const base = path.join(process.cwd(), 'components');
const getProjectRoot = (filePath) => {
  return path.join(process.cwd(), filePath);
}

const libDir = getProjectRoot('lib');
const esDir = getProjectRoot('es');

const compile = (modules) => {
  const targetDir = modules ? libDir : esDir;
  rimrf.sync(targetDir); // 删除原目录
  let { js: jsStream, dts: dtsStream } = gulp.src(source, { base }).pipe(ts(tsConfig));
  dtsStream = dtsStream.pipe(gulp.dest(targetDir));
  if (modules) {
    jsStream = jsStream.pipe(babel(babelConfig));
  }
  jsStream = jsStream.pipe(gulp.dest(targetDir));
  return merge2([jsStream, dtsStream]);
}

gulp.task('compile-with-es', done => {
  console.log('compile to es');
  compile(false).on('finish', done);
})

gulp.task('compile-with-lib', done => {
  console.log('compile to js');
  compile(true).on('finish', done);
})

gulp.task('compile', gulp.parallel('compile-with-es', 'compile-with-lib'));