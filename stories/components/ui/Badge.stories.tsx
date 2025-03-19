import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../../../src/components/ui';
import '../../../src/index.css';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Badge>;

const meta: Meta<StoryProps> = {
  title: 'Components/Badge',
  tags: ['autodocs'],
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
      ],
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'default',
  },
};

