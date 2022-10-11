import React, {Component} from 'react';
import {mount,render} from 'enzyme';

import Button from '..';

describe('test Button Component', () => {
  it('测试Button是否能够正确挂载', () => {
    expect(() => mount(<Button>test</Button>)).not.toThrow();
  });
});
