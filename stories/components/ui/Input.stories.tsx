import React, { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../../src/components/ui';

type StoryProps = ComponentProps<typeof Input>;

const meta: Meta<StoryProps> = {
  title: 'Components/Input',
  tags: ['autodocs'],
  component: Input,
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'search', 'tel', 'url'],
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    value: { control: 'text' },
    defaultValue: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

// Basic Input
export const Default: Story = {
  render: (args) => <Input {...args} />,
  args: {
    placeholder: 'Enter text...',
  },
};

// Different Types
export const Types: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Input type="text" placeholder="Text input" {...args} />
      <Input type="password" placeholder="Password" {...args} />
      <Input type="email" placeholder="Email" {...args} />
      <Input type="number" placeholder="Number" {...args} />
      <Input type="search" placeholder="Search" {...args} />
      <Input type="tel" placeholder="Telephone" {...args} />
      <Input type="url" placeholder="URL" {...args} />
    </div>
  ),
};

// With Value
export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState('');
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
    );
  },
};

// Disabled State
export const Disabled: Story = {
  render: (args) => (
    <Input {...args} disabled placeholder="Disabled input" />
  ),
};

// With Label
export const WithLabel: Story = {
  render: (args) => (
    <div className="space-y-2">
      <label htmlFor="input" className="text-sm font-medium">
        Input Label
      </label>
      <Input {...args} id="input" placeholder="Enter text..." />
    </div>
  ),
};

// Sizes
export const Sizes: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Input
        {...args}
        className="h-8 text-sm"
        placeholder="Small input"
      />
      <Input
        {...args}
        className="h-9 text-base"
        placeholder="Default input"
      />
      <Input
        {...args}
        className="h-10 text-lg"
        placeholder="Large input"
      />
    </div>
  ),
};

// With Error State
export const ErrorState: Story = {
  render: (args) => (
    <div className="space-y-2">
      <Input
        {...args}
        className="border-red-500 focus-visible:ring-red-500"
        placeholder="Error input"
      />
      <p className="text-sm text-red-500">This field is invalid</p>
    </div>
  ),
};
