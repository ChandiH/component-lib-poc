import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '../../../src/components/ui'; // Import the actual component
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Alert>;

const meta: Meta<StoryProps> = {
  title: 'Components/Alert',
  tags: ['autodocs'],
  component: Alert,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Primary Alert',
    variant: 'default',
  },
  render: (props) => {
    return (
      <Alert {...props}>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    );
  },
};

export const Destructive: Story = {
  args: {
    children: 'Secondary Alert',
    variant: 'destructive',
  },
};
