import React from 'react';
import { ComponentStory, ComponentMeta, Meta } from '@storybook/react';
import Button from '.';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';



// 定义一个组件故事模式
const Template: ComponentStory<typeof Button> = (args) => <div><Button {...args} /><Button {...args} /></div>;

const Template2: ComponentStory<typeof Button> = (args) => <div><Button {...args} /></div>;

// 基本组件
export const warning = Template.bind({});
warning.args = {
  children: '按钮',
  size: 'medium',
  type: 'warning'
};

export const danger = Template2.bind({});
danger.args = {
  children: '按钮',
  size: 'medium',
  type: 'danger'
};


export const primary = Template2.bind({});
primary.args = {
  children: '按钮',
  size: 'medium',
  type: 'primary'
};



export const success = Template2.bind({});
success.args = {
  children: '按钮',
  size: 'medium',
  type: 'success'
};



// Basic.parameters = {
//   backgroundColor: {
//     values: [
//       { name: 'red', value: '#f00' },
//       { name: 'green', value: '#0f0' },
//       { name: 'blue', value: '#00f' },
//     ],
//   },
// };


// 元数据，Button组件的描述信息
export default {
  title: 'Example/Button 按钮',
  component: Button,
  argTypes: {
    // backgroundColor: { control: 'color' },
    // type: {
    //   control: { type: 'select' },
    //   options: ['info', 'primary', 'success', 'danger'],
    //   // description: "info primary success danger",
    //   defaultValue: { summary: "string" },

    //   description: "类型",

    //   // table: {
    //   //   type: {
    //   //     summary: "string",
    //   //     detail: "这里是点击类型展开之后的详细描述"
    //   //   },
    //   // }
    // },
    // // open: {
    // //   control: { type: 'radio' },
    // //   options: [true, false]
    // // },
    // size: {
    //   control: {
    //     type: 'select',
    //   },
    //   options: ['small', 'medium', 'large'],
    //   description: 'small medium large'
    // },
    // children: {
    //   control: { type: 'text' },
    //   description: '子元素'
    // }
  },
  args: {
    //👇 Now all Button stories will be primary.
    // open: true,
    children: 'Button',
    size: 'medium',
    type: 'danger',
  },
  parameters: {
    docs: {
      description: {
        // component: '组件描述',
      },
      // page: () => (
      //   <>
      //     <Title />
      //     <Subtitle children="常用的操作按钮。" />
      //     <Description children="组件描述" />
      //     <Primary />
      //     <ArgsTable story={PRIMARY_STORY} />
      //     <Stories title="danger" includePrimary={true} />
      //     <Stories title="primary" includePrimary={true} />
      //   </>
      // ),
    },
    // componentSubtitle: "常用的操作按钮。"
  }
} as unknown as ComponentMeta<typeof Button>
