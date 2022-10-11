module.exports = {
  verbose: true,
  testEnvironment: 'jsdom', // 运行测试环境
  setupFiles: ['./tests/setup.js'], // 启动时先执行的文件
  testMatch: ['**/unit/**/*.(spec|test).(js|jsx|ts|tsx)'], // 测试匹配的文件
  collectCoverage: true, // 覆盖率
  collectCoverageFrom: [
    'components/**/*.(js|jsx|ts|tsx)',
    '!components/**/*.stories.(js|jsx|ts|tsx)',
    '!components/**/*.(spec|test).(js|jsx|ts|tsx)'
  ]
}