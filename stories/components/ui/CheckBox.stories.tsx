import type { Meta, StoryObj } from '@storybook/react';
import { CheckBox } from '../../../src/components/ui';
import '../../../src/index.css';
import { fn } from '@storybook/test';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof CheckBox>;

const meta: Meta<StoryProps> = {
  title: 'Components/CheckBox',
  tags: ['autodocs'],
  component: CheckBox,
  argTypes: {},
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    children: 'Primary CheckBox',
  },
};
