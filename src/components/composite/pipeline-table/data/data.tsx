import { Timer, CircleCheckBig, CircleX, CircleDashed, Minus } from 'lucide-react';

export const statuses = [
  
  {
    value: 'skipped',
    label: 'Skipped',
    icon: Minus,
  },
  {
    value: 'pending',
    label: 'Pending',
    icon: CircleDashed,
  },
  {
    value: 'running',
    label: 'Running',
    icon: Timer,
  },
  {
    value: 'canceled',
    label: 'Canceled',
    icon: CircleX,
  },
  {
    value: 'failed',
    label: 'Failed',
    icon: CircleX,
  },
  {
    value: 'success',
    label: 'Success',
    icon: CircleCheckBig,
  },
];
