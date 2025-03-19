import React, { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '../../../src/components/ui';
import { Button } from '../../../src/components/ui';

type StoryProps = ComponentProps<typeof Card>;

const meta: Meta<StoryProps> = {
  title: 'Components/Card',
  tags: ['autodocs'],
  component: Card,
};

export default meta;

type Story = StoryObj<StoryProps>;

// Basic Card
export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

// With Image
export const WithImage: Story = {
  render: (args) => (
    <Card {...args} className="w-[350px]">
      <img
        src="https://placehold.co/350x150"
        alt="Card image"
        className="w-full rounded-t-lg"
      />
      <CardHeader>
        <CardTitle>Featured Item</CardTitle>
        <CardDescription>A brief description of the item</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Additional details about the featured item go here.</p>
      </CardContent>
      <CardFooter className="justify-end">
        <Button variant="outline">Learn More</Button>
      </CardFooter>
    </Card>
  ),
};

// Profile Card
export const Profile: Story = {
  render: (args) => (
    <Card {...args} className="w-[300px]">
      <CardHeader className="items-center text-center">
        <img
          src="https://placehold.co/100x100"
          alt="Profile"
          className="rounded-full w-24 h-24 mb-2"
        />
        <CardTitle>John Doe</CardTitle>
        <CardDescription>Software Engineer</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-sm">john.doe@example.com</p>
        <p className="text-sm text-muted-foreground mt-1">Joined: Jan 2023</p>
      </CardContent>
      <CardFooter className="justify-center gap-2">
        <Button variant="outline" size="sm">
          Follow
        </Button>
        <Button size="sm">Message</Button>
      </CardFooter>
    </Card>
  ),
};

// Compact Card
export const Compact: Story = {
  render: (args) => (
    <Card {...args} className="w-[250px]">
      <CardHeader className="p-4">
        <CardTitle className="text-lg">Quick Info</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 text-sm">
        <p>Short and sweet content</p>
      </CardContent>
    </Card>
  ),
};

// Multiple Cards
export const Grid: Story = {
  render: (args) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Array.from({ length: 3 }, (_, i) => (
        <Card {...args} key={i}>
          <CardHeader>
            <CardTitle>Card {i + 1}</CardTitle>
            <CardDescription>Description {i + 1}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content for card {i + 1}</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Action {i + 1}</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  ),
};

// Individual Components
export const Header: Story = {
  render: (args) => (
    <Card className="w-[350px]">
      <CardHeader {...args}>
        <CardTitle>Header Only</CardTitle>
        <CardDescription>Header description</CardDescription>
      </CardHeader>
    </Card>
  ),
  name: 'Card Header',
};

export const Content: Story = {
  render: (args) => (
    <Card className="w-[350px]">
      <CardContent {...args}>
        <p>This is the content area</p>
      </CardContent>
    </Card>
  ),
  name: 'Card Content',
};

export const Footer: Story = {
  render: (args) => (
    <Card className="w-[350px]">
      <CardFooter {...args}>
        <Button>Footer Button</Button>
      </CardFooter>
    </Card>
  ),
  name: 'Card Footer',
};
