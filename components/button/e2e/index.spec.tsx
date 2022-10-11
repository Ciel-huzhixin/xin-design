import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { configureToMatchImageSnapshot } from 'jest-image-snapshot';
import Button from '..';

const toMatchSnapshot = configureToMatchImageSnapshot({
  customSnapshotsDir: `${process.cwd()}/snapshots`,
  customDiffDir: `${process.cwd()}/diffSnapshots`,
})
// 扩展一个toMatchSnapshot方法
expect.extend({ toMatchSnapshot });
describe('test Button snapshot', () => {
  it('测试快照是否正确', async () => {
    await jestPuppeteer.resetPage();
    await page.goto(`file://${process.cwd()}/tests/index.html`); // 跳转到对应路径
    const html = ReactDOMServer.renderToString(<Button>按钮111</Button>);
    await page.evaluate(innerHTML => {
      document.querySelector('#root').innerHTML = innerHTML;
    }, html);
    const screenShot = await page.screenshot(); // 生成一张新的快照 
    expect(screenShot).toMatchSnapshot(); // 比较新的快照 和老的快照是否相同
  })
})