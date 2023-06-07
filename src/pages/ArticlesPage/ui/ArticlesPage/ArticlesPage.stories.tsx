import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticlesPage from './ArticlesPage';

export default {
  title: 'widget/ArticlesPage.stories',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
  <ArticlesPage {...args} />
);

export const Light = Template.bind({});
Light.args = {};
