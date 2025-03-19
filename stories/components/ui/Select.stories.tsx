import React, { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from '../../../src/components/ui';

type StoryProps = ComponentProps<typeof Select> & ComponentProps<typeof SelectContent>;

const meta: Meta<StoryProps> = {
  title: 'Components/Select',
  tags: ['autodocs'],
  component: Select,
  argTypes: {
    disabled: { control: 'boolean' },
    defaultValue: { control: 'text' },
    position: {
      control: 'select',
      options: ['popper', 'item-aligned'],
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

// Basic Select
export const Default: Story = {
  render: (args) => (
    <div className="p-4">
      <Select {...args}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

// With Groups
export const WithGroups: Story = {
  render: (args) => (
    <div className="p-4">
      <Select {...args}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Citrus</SelectLabel>
            <SelectItem value="orange">Orange</SelectItem>
            <SelectItem value="lemon">Lemon</SelectItem>
            <SelectItem value="lime">Lime</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Tropical</SelectLabel>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="mango">Mango</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};

// Controlled Select
export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState('');

    return (
      <div className="p-4">
        <Select value={value} onValueChange={setValue} {...args}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="red">Red</SelectItem>
            <SelectItem value="blue">Blue</SelectItem>
            <SelectItem value="green">Green</SelectItem>
          </SelectContent>
        </Select>
        <p className="mt-2 text-sm">Selected value: {value || 'None'}</p>
      </div>
    );
  },
};

// Disabled State
export const Disabled: Story = {
  render: (args) => (
    <div className="p-4">
      <Select disabled {...args}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

// Long List with Scroll
export const Scrollable: Story = {
  render: (args) => (
    <div className="p-4">
      <Select {...args}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select a number" />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: 20 }, (_, i) => (
            <SelectItem key={i} value={`item-${i}`}>
              Item {i + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  ),
};

// With Custom Positioning
export const CustomPositioning: Story = {
  render: (args) => (
    <div className="p-4 flex flex-col gap-8">
      <Select {...args}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Popper (default)" />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectItem value="item1">Item 1</SelectItem>
          <SelectItem value="item2">Item 2</SelectItem>
          <SelectItem value="item3">Item 3</SelectItem>
        </SelectContent>
      </Select>

      <Select {...args}>
        <SelectTrigger className="w-[180px] mt-3">
          <SelectValue placeholder="Item-aligned" />
        </SelectTrigger>
        <SelectContent position="item-aligned">
          <SelectItem value="item1">Item 1</SelectItem>
          <SelectItem value="item2">Item 2</SelectItem>
          <SelectItem value="item3">Item 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

// Individual Component
export const Trigger: Story = {
  render: (args) => (
    <Select {...args}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select an option" />
    </SelectTrigger>
    </Select>
  ),
  name: 'Select Trigger',
};
