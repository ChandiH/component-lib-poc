import React, { ComponentProps, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from '../../../src/components/ui';

type StoryProps = ComponentProps<typeof Command>;

const meta: Meta<StoryProps> = {
  title: 'Components/Command',
  tags: ['autodocs'],
  component: Command,
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

// Basic Command
export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

// Command Dialog
export const Dialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Command Dialog</button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                Profile
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                Mail
                <CommandShortcut>⌘M</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    );
  },
};

// Interactive Example
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <Command className="rounded-lg border shadow-md">
        <CommandInput
          placeholder="Search something..."
          value={value}
          onValueChange={setValue}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Fruits">
            <CommandItem onSelect={() => setValue('apple')}>Apple</CommandItem>
            <CommandItem onSelect={() => setValue('banana')}>
              Banana
            </CommandItem>
            <CommandItem onSelect={() => setValue('orange')}>
              Orange
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Vegetables">
            <CommandItem onSelect={() => setValue('carrot')}>
              Carrot
            </CommandItem>
            <CommandItem onSelect={() => setValue('potato')}>
              Potato
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    );
  },
};

// Individual Components
export const Input: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Search..." />
    </Command>
  ),
  name: 'Command Input',
};

export const Empty: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandEmpty>No results found.</CommandEmpty>
    </Command>
  ),
  name: 'Command Empty',
};

export const ItemWithShortcut: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md">
      <CommandItem>
        Profile
        <CommandShortcut>⌘P</CommandShortcut>
      </CommandItem>
    </Command>
  ),
  name: 'Command Item with Shortcut',
};
