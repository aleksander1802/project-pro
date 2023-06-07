import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

export default {
  title: 'entities/ArticleTextBlockComponent.stories',
  component: ArticleTextBlockComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleTextBlockComponent>;

const Template: ComponentStory<typeof ArticleTextBlockComponent> = (args) => (
  <ArticleTextBlockComponent {...args} />
);

export const Light = Template.bind({});
Light.args = {};
