import React, { ComponentProps, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from '../../../src/components/ui';
import { Button } from '../../../src/components/ui';
import { Input } from '../../../src/components/ui';

type StoryProps = ComponentProps<typeof Popover> &
  ComponentProps<typeof PopoverContent>;

const meta: Meta<StoryProps> = {
  title: 'Components/Popover',
  tags: ['autodocs'],
  component: Popover,
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

// Basic Popover
export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex justify-center p-8">
        <Popover open={open} onOpenChange={setOpen} {...args}>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent side={args.side}>
            <div className="space-y-2">
              <h4 className="font-medium">Popover Title</h4>
              <p className="text-sm text-muted-foreground">
                This is a basic popover content area.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
};

// With Form
export const WithForm: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex justify-center p-8">
        <Popover open={open} onOpenChange={setOpen} {...args}>
          <PopoverTrigger asChild>
            <Button variant="outline">Add Note</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" side={args.side}>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">New Note</h4>
                <Input placeholder="Title" />
                <textarea
                  className="w-full h-20 rounded-md border border-input bg-transparent px-3 py-2 text-sm"
                  placeholder="Enter your note..."
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button size="sm" onClick={() => setOpen(false)}>
                  Save
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
};

// Side Variations
export const SideVariations: Story = {
  render: (args) => {
    const [openTop, setOpenTop] = useState(false);
    const [openRight, setOpenRight] = useState(false);
    const [openBottom, setOpenBottom] = useState(false);
    const [openLeft, setOpenLeft] = useState(false);

    return (
      <div className="flex flex-col items-center gap-8 p-8">
        <Popover open={openTop} onOpenChange={setOpenTop} {...args}>
          <PopoverTrigger asChild>
            <Button variant="outline">Top</Button>
          </PopoverTrigger>
          <PopoverContent side="top">This appears on top</PopoverContent>
        </Popover>

        <div className="flex gap-8">
          <Popover open={openLeft} onOpenChange={setOpenLeft} {...args}>
            <PopoverTrigger asChild>
              <Button variant="outline">Left</Button>
            </PopoverTrigger>
            <PopoverContent side="left">This appears on left</PopoverContent>
          </Popover>

          <Popover open={openRight} onOpenChange={setOpenRight} {...args}>
            <PopoverTrigger asChild>
              <Button variant="outline">Right</Button>
            </PopoverTrigger>
            <PopoverContent side="right">This appears on right</PopoverContent>
          </Popover>
        </div>

        <Popover open={openBottom} onOpenChange={setOpenBottom} {...args}>
          <PopoverTrigger asChild>
            <Button variant="outline">Bottom</Button>
          </PopoverTrigger>
          <PopoverContent side="bottom">This appears on bottom</PopoverContent>
        </Popover>
      </div>
    );
  },
};

// With Anchor
export const WithAnchor: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="flex justify-center p-8">
        <Popover open={open} onOpenChange={setOpen} {...args}>
          <div className="inline-flex items-center gap-2">
            <PopoverAnchor asChild>
              <span className="text-muted-foreground">Anchor here:</span>
            </PopoverAnchor>
            <PopoverTrigger asChild>
              <Button variant="outline">Open</Button>
            </PopoverTrigger>
          </div>
          <PopoverContent side={args.side}>
            This popover is anchored to the text rather than the button
          </PopoverContent>
        </Popover>
      </div>
    );
  },
};
