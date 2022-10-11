module.exports = {
  presets: [
    '@babel/preset-react', // 将React编译成ES5
    [
      '@babel/preset-env', // 将ES6编译成ES5
      {
        modules: 'auto',
        targets: {
          browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 11']
        }
      }
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-typescript', // 支持typescript
      {
        isTSX: true,
      }
    ],
    // 提取一些编译运行时帮助方法
    ['@babel/plugin-transform-runtime']
  ]
}