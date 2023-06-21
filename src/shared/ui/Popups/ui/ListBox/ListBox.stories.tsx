import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
  <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  value: '4124',
  items: [
    {
      content: '123',
      value: 't4n45ym45',
    },
    {
      content: '12512551',
      value: 'bn4643737',
    },
  ],
};

export const topLeft = Template.bind({});
topLeft.args = {
  direction: 'top left',
  value: '4124',
  items: [
    {
      content: '123',
      value: 't4n45ym45',
    },
    {
      content: '12512551',
      value: 'bn4643737',
    },
  ],
};

export const topRight = Template.bind({});
topRight.args = {
  direction: 'top right',
  value: '4124',
  items: [
    {
      content: '123',
      value: 't4n45ym45',
    },
    {
      content: '12512551',
      value: 'bn4643737',
    },
  ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
  direction: 'bottom left',
  value: '4124',
  items: [
    {
      content: '123',
      value: 't4n45ym45',
    },
    {
      content: '12512551',
      value: 'bn4643737',
    },
  ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
  direction: 'bottom right',
  value: '4124',
  items: [
    {
      content: '123',
      value: 't4n45ym45',
    },
    {
      content: '12512551',
      value: 'bn4643737',
    },
  ],
};
