import React from 'react';
import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import '../../../src/index.css';
import { DataTable } from '../../../src/components/composite/pipeline-table/components/data-table';
import { columns } from '../../../src/components/composite/pipeline-table/components/columns';
import { TaskData } from '../../../src/components/composite/pipeline-table/data/tasks';
import {
  Task,
  taskSchema,
} from '../../../src/components/composite/pipeline-table/data/schema';
import { z } from 'zod';

const meta: Meta = {
  title: 'Components/Task-Table',
  tags: ['autodocs'],
  component: DataTable,
  args: {
    columns,
  },
};

export default meta;

type Story = StoryObj;

async function getTasks() {
  const tasks = TaskData;

  return z.array(taskSchema).parse(tasks);
}

export const Default: Story = {
  render: () => {
    const [data, setData] = useState<Task[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        const result = await getTasks();
        setData(result);
      };
      fetchData();
    }, []);

    return <DataTable columns={columns} data={data} />;
  },
};
