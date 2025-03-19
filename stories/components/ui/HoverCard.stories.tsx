// stories/HoverCard.stories.tsx
import React, { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '../../../src/components/ui'; // Adjust the import path as needed

type StoryProps = ComponentProps<typeof HoverCard>;

const meta: Meta<StoryProps> = {
  title: 'Components/HoverCard',
  tags: ['autodocs'],
  component: HoverCard,
  argTypes: {
    openDelay: { control: 'number' },
    closeDelay: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

// Basic Hover Card
export const Default: Story = {
  render: (args) => (
    <div className="flex justify-center p-8">
      <HoverCard {...args}>
        <HoverCardTrigger asChild>
          <span className="text-blue-600 hover:underline cursor-pointer">
            @username
          </span>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex flex-col gap-2">
            <h4 className="text-sm font-semibold">@username</h4>
            <p className="text-sm">User description goes here</p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>100 Following</span>
              <span>200 Followers</span>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};

// With Image
export const WithImage: Story = {
  render: (args) => (
    <div className="flex justify-center p-8">
      <HoverCard {...args}>
        <HoverCardTrigger asChild>
          <span className="text-blue-600 hover:underline cursor-pointer">
            Hover me
          </span>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex gap-4">
            <img
              src="https://placehold.co/100x100"
              alt="Preview"
              className="w-16 h-16 rounded-full"
            />
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Preview Title</h4>
              <p className="text-sm">
                This is a description that appears when hovering.
              </p>
              <div className="text-xs text-muted-foreground">
                Additional info
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};

// Different Positions
export const SideVariations: Story = {
  render: (args) => (
    <div className="flex flex-col items-center gap-8 p-8">
      <HoverCard {...args}>
        <HoverCardTrigger asChild>
          <span className="text-blue-600 hover:underline cursor-pointer">
            Top (default)
          </span>
        </HoverCardTrigger>
        <HoverCardContent side="top">This appears on top</HoverCardContent>
      </HoverCard>

      <HoverCard {...args}>
        <HoverCardTrigger asChild>
          <span className="text-blue-600 hover:underline cursor-pointer">
            Bottom
          </span>
        </HoverCardTrigger>
        <HoverCardContent side="bottom">
          This appears on bottom
        </HoverCardContent>
      </HoverCard>

      <div className="flex gap-8">
        <HoverCard {...args}>
          <HoverCardTrigger asChild>
            <span className="text-blue-600 hover:underline cursor-pointer">
              Left
            </span>
          </HoverCardTrigger>
          <HoverCardContent side="left">This appears on left</HoverCardContent>
        </HoverCard>

        <HoverCard {...args}>
          <HoverCardTrigger asChild>
            <span className="text-blue-600 hover:underline cursor-pointer">
              Right
            </span>
          </HoverCardTrigger>
          <HoverCardContent side="right">
            This appears on right
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  ),
};

// Custom Delay
export const CustomDelay: Story = {
  render: (args) => (
    <div className="flex justify-center p-8">
      <HoverCard openDelay={500} closeDelay={200} {...args}>
        <HoverCardTrigger asChild>
          <span className="text-blue-600 hover:underline cursor-pointer">
            Hover me (500ms open, 200ms close)
          </span>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Custom Delay</h4>
            <p className="text-sm">
              This hover card has custom open/close delays
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
};
