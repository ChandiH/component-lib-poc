import { Timer, CircleCheckBig, CircleX, CircleDashed } from 'lucide-react';

export const statuses = [
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
    value: 'success',
    label: 'Success',
    icon: CircleCheckBig,
  },
];
