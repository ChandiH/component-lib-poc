import React, { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Separator } from '../../../src/components/ui';

type StoryProps = ComponentProps<typeof Separator>;

const meta: Meta<StoryProps> = {
  title: 'Components/Separator',
  tags: ['autodocs'],
  component: Separator,
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    decorative: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

// Basic Horizontal Separator
export const Default: Story = {
  render: (args) => (
    <div className="p-4">
      <div className="space-y-2">
        <p>Section 1</p>
        <Separator {...args} />
        <p>Section 2</p>
      </div>
    </div>
  ),
  args: {
    orientation: 'horizontal',
  },
};

// Vertical Separator
export const Vertical: Story = {
  render: (args) => (
    <div className="p-4">
      <div className="flex items-center gap-4">
        <p>Left Section</p>
        <Separator orientation="vertical" className="h-10" {...args} />
        <p>Right Section</p>
      </div>
    </div>
  ),
};

// With Custom Styling
export const CustomStyling: Story = {
  render: (args) => (
    <div className="p-4 space-y-4">
      <div className="space-y-2">
        <p>Dashed Separator</p>
        <Separator className="border-dashed border-muted" {...args} />
      </div>
      <div className="space-y-2">
        <p>Thicker Separator</p>
        <Separator className="h-[2px] bg-gray-400" {...args} />
      </div>
      <div className="flex items-center gap-4">
        <p>Colored Vertical</p>
        <Separator
          orientation="vertical"
          className="h-12 bg-blue-500 w-[2px]"
          {...args}
        />
        <p>Next Section</p>
      </div>
    </div>
  ),
};

// In Content Layout
export const ContentLayout: Story = {
  render: (args) => (
    <div className="p-4 max-w-md mx-auto">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Title</h3>
          <p className="text-sm text-muted-foreground">
            Some description text here
          </p>
        </div>
        <Separator {...args} />
        <div className="flex gap-4">
          <div className="flex-1">
            <p className="font-medium">Section A</p>
            <p className="text-sm">Content for section A</p>
          </div>
          <Separator orientation="vertical" className="h-16" {...args} />
          <div className="flex-1">
            <p className="font-medium">Section B</p>
            <p className="text-sm">Content for section B</p>
          </div>
        </div>
        <Separator {...args} />
        <p className="text-sm text-muted-foreground">Footer text</p>
      </div>
    </div>
  ),
};

// Multiple Separators
export const Multiple: Story = {
  render: (args) => (
    <div className="p-4">
      <div className="space-y-2">
        <p>Item 1</p>
        <Separator {...args} />
        <p>Item 2</p>
        <Separator {...args} />
        <p>Item 3</p>
        <Separator {...args} />
        <p>Item 4</p>
      </div>
    </div>
  ),
};
