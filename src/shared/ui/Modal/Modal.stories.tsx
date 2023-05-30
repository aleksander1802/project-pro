import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Modal from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa omnis soluta laudantium? Ipsum ratione obcaecati id nesciunt possimus quos neque. Voluptatum hic a amet blanditiis, sunt vel tempora minima magni laudantium voluptates harum est rerum eveniet aliquam eligendi voluptatem, corporis tenetur, exercitationem dolore ipsa molestiae magnam consequatur voluptas. Dolorem eaque exercitationem laborum accusantium iusto necessitatibus voluptatum, molestiae veritatis odio magnam inventore, quae quasi. Quisquam, quas, sit eius totam odio iusto numquam tenetur quo cupiditate nam natus et. Et pariatur a, velit ipsum tempore doloribus quas laboriosam ipsam, vitae qui rerum corrupti, commodi iusto sequi voluptatem quia aliquam. Nihil, eius recusandae.',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa omnis soluta laudantium? Ipsum ratione obcaecati id nesciunt possimus quos neque. Voluptatum hic a amet blanditiis, sunt vel tempora minima magni laudantium voluptates harum est rerum eveniet aliquam eligendi voluptatem, corporis tenetur, exercitationem dolore ipsa molestiae magnam consequatur voluptas. Dolorem eaque exercitationem laborum accusantium iusto necessitatibus voluptatum, molestiae veritatis odio magnam inventore, quae quasi. Quisquam, quas, sit eius totam odio iusto numquam tenetur quo cupiditate nam natus et. Et pariatur a, velit ipsum tempore doloribus quas laboriosam ipsam, vitae qui rerum corrupti, commodi iusto sequi voluptatem quia aliquam. Nihil, eius recusandae.',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
