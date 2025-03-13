import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../../../src/components/ui/Alerts'; // Import the actual component

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
};

export default meta;

type Alert = StoryObj<typeof Alert>;

export const Default: Alert = {
  args: {
    children: 'Primary Alert',
    variant: 'default',
  },
};

export const Destructive: Alert = {
  args: {
    children: 'Secondary Alert',
    variant: 'destructive',
  },
};
