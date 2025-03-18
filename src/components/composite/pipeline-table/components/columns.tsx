import React from 'react';
import { ColumnDef } from '@tanstack/react-table';

import { statuses } from '../data/data';
import { IPipeline, IStage } from '../data/schema';
import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../../../ui';

export type DefColumn = ColumnDef<IPipeline>;

export const columns: ColumnDef<IPipeline>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue('status')
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'source',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Source" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue('source')}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'webUrl',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Web Url" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <a className="max-w-[500px] truncate font-medium hover:text-primary" href={row.getValue('webUrl')}>
            {row.getValue('webUrl')}
          </a>
        </div>
      );
    },
    enableSorting: false, 
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue('createdAt')}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'duration',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Duration" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue('duration')}
          </span>
        </div>
      );
    },
    enableSorting: false, 
  },
  {
    accessorKey: 'stages',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Stages" />
    ),
    cell: ({ row }) => {
      const stages: IStage[] = row.getValue('stages');
      const getStageIcon = (stage: IStage) => 
        statuses.find(s => s.value === stage.status)?.icon || null;
    
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium flex">
            {stages?.map(stage => {
              const Icon = getStageIcon(stage);
              return Icon && (
                <HoverCard>
                  <HoverCardTrigger>
                    <Icon className="mr-2 h-4 w-4 text-muted-foreground" />
                  </HoverCardTrigger>
                  <HoverCardContent className="w-auto">
                    {stage.name}
                  </HoverCardContent>
                </HoverCard>);
            })}
          </span>
        </div>
      );
    },
    enableSorting: false, 
  },
  {
    id: 'actions',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => <DataTableRowActions row={row} actions={[
      {
        name: "run",
        event: (row: IPipeline) => console.log("run", row)
      },
      {
        name: "deploy",
        event: (row: IPipeline) => console.log("deploy", row)      
      }
    ]}/>,
  },
];
