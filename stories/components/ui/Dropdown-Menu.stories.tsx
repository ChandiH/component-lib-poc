import React, { ComponentProps, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '../../../src/components/ui';
import { Button } from '../../../src/components/ui';

type StoryProps = ComponentProps<typeof DropdownMenu>;

const meta: Meta<StoryProps> = {
  title: 'Components/DropdownMenu',
  tags: ['autodocs'],
  component: DropdownMenu,
  argTypes: {
    open: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

// Basic Dropdown
export const Default: Story = {
  render: (props) => (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

// With Submenu
export const WithSubmenu: Story = {
  render: (props) => (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>New Tab</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Save Page As...</DropdownMenuItem>
            <DropdownMenuItem>New Window</DropdownMenuItem>
            <DropdownMenuItem>History</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuItem>Downloads</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Extensions</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

// With Checkboxes and Radio Items
export const WithInteractiveItems: Story = {
  render: (props) => {
    const [showStatusBar, setShowStatusBar] = useState(true);
    const [showActivityBar, setShowActivityBar] = useState(false);

    return (
      <DropdownMenu {...props}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
          >
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuRadioItem value="top" onSelect={() => {}}>
            Top
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom" onSelect={() => {}}>
            Bottom
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right" onSelect={() => {}}>
            Right
          </DropdownMenuRadioItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};

// With Groups
export const WithGroups: Story = {
  render: (props) => (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>File</DropdownMenuLabel>
          <DropdownMenuItem>New</DropdownMenuItem>
          <DropdownMenuItem>Open</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Edit</DropdownMenuLabel>
          <DropdownMenuItem>Cut</DropdownMenuItem>
          <DropdownMenuItem>Copy</DropdownMenuItem>
          <DropdownMenuItem>Paste</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const CheckboxItem: Story = {
  render: (props) => {
    const [checked, setChecked] = useState(false);
    return (
      <DropdownMenu {...props}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem
            checked={checked}
            onCheckedChange={setChecked}
          >
            Checkbox Item
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  name: 'Dropdown Checkbox Item',
};

export const RadioItem: Story = {
  render: (props) => (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioItem value="item">Radio Item</DropdownMenuRadioItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  name: 'Dropdown Radio Item',
};

export const Submenu: Story = {
  render: (props) => (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Submenu</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Sub Item 1</DropdownMenuItem>
            <DropdownMenuItem>Sub Item 2</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  name: 'Dropdown Submenu',
};
