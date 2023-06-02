import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title:
    'Title Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolores?',
  text: 'Text Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, adipisci. Dolor sapiente odit excepturi nulla, itaque, tempora minima ipsum laborum vero iste quaerat consectetur libero, quas dolorem consequuntur repellat? Libero.',
};

export const Error = Template.bind({});
Error.args = {
  title:
    'Title Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolores?',
  text: 'Text Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, adipisci. Dolor sapiente odit excepturi nulla, itaque, tempora minima ipsum laborum vero iste quaerat consectetur libero, quas dolorem consequuntur repellat? Libero.',
  theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title:
    'Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, libero.',
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: 'Text Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, optio. Deserunt dolorem excepturi necessitatibus laborum molestiae placeat iste libero a, quisquam ullam facere? Id excepturi inventore tempora unde, beatae facere.',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title:
    'Title Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, dolores?',
  text: 'Text Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, adipisci. Dolor sapiente odit excepturi nulla, itaque, tempora minima ipsum laborum vero iste quaerat consectetur libero, quas dolorem consequuntur repellat? Libero.',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title:
    'Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, libero.',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: 'Text Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, optio. Deserunt dolorem excepturi necessitatibus laborum molestiae placeat iste libero a, quisquam ullam facere? Id excepturi inventore tempora unde, beatae facere.',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
