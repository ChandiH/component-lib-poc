import { z } from 'zod';

import { columns } from './components/columns';
import { DataTable } from './components/data-table';
// import { UserNav } from "./components/user-nav"
import { PipelineSchema } from './data/schema';
import { PipelineData } from './data/tasks';

// Simulate a database read for tasks.
async function getTasks() {
  const tasks = PipelineData;

  return z.array(PipelineSchema).parse(tasks);
}

export default async function PipelinePage() {
  const tasks = await getTasks();

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  );
}
