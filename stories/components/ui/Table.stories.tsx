import React, { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '../../../src/components/ui';

type StoryProps = ComponentProps<typeof Table>;

const meta: Meta<StoryProps> = {
  title: 'Components/Table',
  tags: ['autodocs'],
  component: Table,
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

// Basic Table
export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">1</TableCell>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">2</TableCell>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// With Footer and Caption
export const WithFooterAndCaption: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Widget A</TableCell>
          <TableCell>$19.99</TableCell>
          <TableCell>5</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget B</TableCell>
          <TableCell>$29.99</TableCell>
          <TableCell>3</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell>$89.94</TableCell>
        </TableRow>
      </TableFooter>
      <TableCaption>A list of products and their prices</TableCaption>
    </Table>
  ),
};

// Scrollable Table
export const Scrollable: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Location</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 10 }, (_, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{i + 1}</TableCell>
            <TableCell>User {i + 1}</TableCell>
            <TableCell>user{i + 1}@example.com</TableCell>
            <TableCell>Employee</TableCell>
            <TableCell>Engineering</TableCell>
            <TableCell>Office {i % 3}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// With Custom Styling
export const CustomStyling: Story = {
  render: (args) => (
    <Table {...args} className="border rounded-lg">
      <TableHeader>
        <TableRow className="bg-muted/20">
          <TableHead className="h-12">Item</TableHead>
          <TableHead className="h-12">Status</TableHead>
          <TableHead className="h-12">Priority</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="hover:bg-blue-50">
          <TableCell className="font-medium">Task 1</TableCell>
          <TableCell>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
              Complete
            </span>
          </TableCell>
          <TableCell>High</TableCell>
        </TableRow>
        <TableRow className="hover:bg-blue-50">
          <TableCell className="font-medium">Task 2</TableCell>
          <TableCell>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
              In Progress
            </span>
          </TableCell>
          <TableCell>Medium</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// Dense Table
export const Dense: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead className="h-8">Code</TableHead>
          <TableHead className="h-8">Name</TableHead>
          <TableHead className="h-8">Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="p-1">A1</TableCell>
          <TableCell className="p-1">Item A</TableCell>
          <TableCell className="p-1">100</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="p-1">B2</TableCell>
          <TableCell className="p-1">Item B</TableCell>
          <TableCell className="p-1">200</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="p-1">C3</TableCell>
          <TableCell className="p-1">Item C</TableCell>
          <TableCell className="p-1">300</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

// Individual Components
export const Header: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Column 1</TableHead>
          <TableHead>Column 2</TableHead>
        </TableRow>
      </TableHeader>
    </Table>
  ),
  name: 'Table Header',
};

export const Row: Story = {
  render: () => (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Cell 1</TableCell>
          <TableCell>Cell 2</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  name: 'Table Row',
};
