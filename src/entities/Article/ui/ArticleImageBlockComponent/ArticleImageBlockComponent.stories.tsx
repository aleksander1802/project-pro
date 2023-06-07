import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

export default {
  title: 'entities/ArticleImageBlockComponent.stories',
  component: ArticleImageBlockComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleImageBlockComponent>;

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => (
  <ArticleImageBlockComponent {...args} />
);

export const Light = Template.bind({});
Light.args = {};
