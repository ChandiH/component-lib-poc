import { z } from 'zod';

export const StageSchema = z.object({
    id: z.string(),
    status: z.string(),
    name: z.string()
});

export const PipelineSchema = z.object({
  id: z.string(),
  status: z.string(),
  source: z.string(),
  webUrl: z.string(),
  createdAt: z.string(),
  duration: z.string(),
  stages: z.array(StageSchema).optional()
});

export const ActionSchema = z.object({
  name: z.string(),
  event: z.function().args(z.any()).returns(z.void())
});

export type IPipeline = z.infer<typeof PipelineSchema>;
export type IStage = z.infer<typeof StageSchema>;
export type IAction = z.infer<typeof ActionSchema>;

export const stage = [
  {
    id: "stage1",
    status: "success",
    name: "test"
  },
  {
    id: "stage2",
    status: "failed",
    name: "build"
  },
  {
    id: "stage3",
    status: "failed",
    name: "deploy"
  },
]